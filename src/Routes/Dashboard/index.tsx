import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Dashboard() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
