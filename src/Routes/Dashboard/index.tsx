import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
