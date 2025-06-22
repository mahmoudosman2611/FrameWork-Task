
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router";

export default function Fixed() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
