import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="layouts">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
