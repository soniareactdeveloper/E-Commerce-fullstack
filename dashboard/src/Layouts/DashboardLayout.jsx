import { Outlet } from "react-router";
import Sidebar from "../Components/Navbar/Sidebar";
import TopNavbar from "../Components/Navbar/TopNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen flex-col">
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopNavbar />
      </div>

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
