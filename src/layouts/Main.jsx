import { Outlet } from "react-router-dom"
import Navbar from "../components/Shared/Navbar/Navbar"
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-24 min-h-[calc(100vh-151.750px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Main
