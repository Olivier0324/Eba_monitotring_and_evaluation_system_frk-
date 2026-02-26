import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "./Footer";

const PublicLayout = () => {
  return (
    // 1. min-h-screen: Makes the whole page at least as tall as the screen
    // 2. flex flex-col: Allows us to use 'flex-grow' on the content
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* 3. flex-grow: This pushes the footer down if there is little content */}
      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;
