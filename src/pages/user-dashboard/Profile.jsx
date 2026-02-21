import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useUpdateUserMutation,
  useDeleteAccountMutation,
} from "../../services/api/api";
import { setUser, logout } from "../../slices/authReducer";
import { toast } from "react-toastify";
import {
  UploadCloud,
  User,
  Mail,
  Save,
  Loader2,
  Trash2,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Update States
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(user?.profilePicture || "");

  // Delete Confirmation State
  const [confirmText, setConfirmText] = useState("");

  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  const [deleteAccount, { isLoading: isDeleting }] = useDeleteAccountMutation();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    if (file) data.append("profilePicture", file);

    try {
      const response = await updateUser(data).unwrap();
      dispatch(setUser(response.user));
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(err?.data?.message || "Update failed");
    }
  };

  const handleDelete = async () => {
    if (confirmText.toLowerCase() !== "delete") return; // Lowercase check

    try {
      await deleteAccount().unwrap();
      dispatch(logout());
      toast.success("Account deleted. We're sorry to see you go.");
      navigate("/login");
    } catch (err) {
      toast.error(err?.data?.message || "Could not delete account");
    }
  };

  return (
    <div className="max-w-3xl py-10 px-4 space-y-10">
      {/* SECTION 1: PROFILE INFORMATION */}
      <section className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="px-8 py-6 border-b border-gray-800 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-white">
              General Information
            </h2>
            <p className="text-gray-400 text-sm">
              Update your avatar and personal details.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Avatar Upload */}
          <div className="flex flex-col items-center md:flex-row gap-8">
            <div className="relative group w-28 h-28">
              <img
                src={preview || "/default-avatar.png"}
                className="w-full h-full rounded-full object-cover ring-4 ring-gray-800 group-hover:ring-blue-500 transition-all"
                alt="Profile"
              />
              <label className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-all">
                <UploadCloud className="text-white" size={28} />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </label>
            </div>
            <div className="text-center md:text-left">
              <p className="text-white font-medium mb-1">
                Your Profile Picture
              </p>
              <p className="text-gray-500 text-sm mb-3">
                Allowed JPG or PNG. Max size of 2MB.
              </p>
              <button
                type="button"
                className="text-sm text-blue-400 hover:text-blue-300 font-medium"
              >
                Change Photo
              </button>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-gray-950 border border-gray-800 text-white pl-10 pr-4 py-3 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="email"
                  value={formData.email}
                  disabled
                  className="w-full bg-gray-950 border border-gray-800 text-gray-500 pl-10 pr-4 py-3 rounded-xl cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isUpdating}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all disabled:opacity-50"
            >
              {isUpdating ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Save size={20} />
              )}
              Save Changes
            </button>
          </div>
        </form>
      </section>

      {/* SECTION 2: DANGER ZONE */}
      <section className="bg-gray-950 border border-red-900/30 rounded-3xl overflow-hidden shadow-sm">
        <div className="px-8 py-5 bg-red-950/10 border-b border-red-900/20">
          <h2 className="text-lg font-bold text-red-500 flex items-center gap-2">
            <AlertCircle size={20} /> Danger Zone
          </h2>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-white font-bold mb-1">Delete this account</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Once you delete your account, there is no going back. This will
              permanently remove all your data, including orders, settings, and
              profile information.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs text-gray-500 font-medium">
              PLEASE TYPE <span className="text-red-400 font-bold">delete</span>{" "}
              TO CONFIRM
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="type delete here..."
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                className="flex-1 bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-xl focus:border-red-500 transition-all outline-none placeholder:text-gray-700"
              />
              <button
                onClick={handleDelete}
                disabled={confirmText.toLowerCase() !== "delete" || isDeleting}
                className="flex items-center justify-center gap-2 bg-red-600/10 border border-red-600/30 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3 rounded-xl font-bold transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              >
                {isDeleting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <Trash2 size={20} />
                )}
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
