import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-dvh w-dvw  flex flex-col items-center justify-center  bg-[url('/src/assets/hero/heroBackground.jpg')] bg-contain bg-top">
      <Outlet />
    </div>
  );
};

export default Layout;
