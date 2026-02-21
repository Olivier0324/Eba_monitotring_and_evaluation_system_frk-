import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useVerifyOTPMutation,
  useResendOTPMutation,
} from "../services/api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Mail, ArrowLeft, RefreshCcw } from "lucide-react";
import { setTempEmail } from "../slices/authReducer";

function VerifyEmail() {
  const tempEmail = useSelector((state) => state.auth.tempEmail);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const [verifyOTP, { isLoading: verifying }] = useVerifyOTPMutation();
  const [resendOTP, { isLoading: resending }] = useResendOTPMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redirect if no email is found in state (Security check)
  useEffect(() => {
    if (!tempEmail) {
      toast.warning("Session expired. Please register again.");
      navigate("/register");
    }
  }, [tempEmail, navigate]);

  // Handle Typing & Auto-focus
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next box
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length < 6) return toast.error("Please enter all 6 digits.");

    try {
      await verifyOTP({ email: tempEmail, otp: otpString }).unwrap();
      toast.success("Verification Successful! You can now login.");
      dispatch(setTempEmail(null)); // Clear temp email
      navigate("/login");
    } catch (error) {
      toast.error(error?.data?.message || "Invalid OTP code.");
    }
  };

  const handleResend = async () => {
    try {
      await resendOTP({ email: tempEmail }).unwrap();
      toast.success("A new 6-digit code has been sent to your email.");
      setOtp(new Array(6).fill("")); // Clear current boxes
      inputRefs.current[0].focus(); // Focus first box
    } catch (error) {
      toast.error(error?.data?.message || "Failed to resend code.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-slate-100 text-center">
        {/* Icon Header */}
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <Mail className="w-8 h-8 text-blue-600" />
        </div>

        <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
          Check your email
        </h2>
        <p className="text-slate-500 mb-8">
          We've sent a 6-digit verification code to <br />
          <span className="font-semibold text-slate-700">{tempEmail}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Six Boxes Input */}
          <div className="flex justify-between gap-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={(el) => (inputRefs.current[index] = el)}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-14 text-2xl font-bold text-center bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-slate-800"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={verifying}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-100 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {verifying ? "Verifying..." : "Verify Account"}
          </button>
        </form>

        <div className="mt-8 space-y-4">
          <p className="text-slate-500 text-sm">
            Didn't receive the code?{" "}
            <button
              onClick={handleResend}
              disabled={resending}
              className="text-blue-600 font-bold hover:text-blue-700 transition-colors inline-flex items-center gap-1 disabled:opacity-50"
            >
              {resending ? (
                <RefreshCcw className="w-4 h-4 animate-spin" />
              ) : (
                "Resend code"
              )}
            </button>
          </p>

          <button
            onClick={() => navigate("/register")}
            className="inline-flex items-center text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to registration
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
