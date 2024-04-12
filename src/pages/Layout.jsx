import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-dvh w-dvw  flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
};

export default Layout;
