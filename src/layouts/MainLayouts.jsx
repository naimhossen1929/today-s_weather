import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
