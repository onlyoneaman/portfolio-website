import SocialButtons from "@/components/Layout/Sider/SocialButtons.js";
import RouteButtons from "@/components/Layout/Sider/RouteButtons.js";

const Sider = () => {



  return (
    <div
      className="w-1/6 h-screen bg-gray-200 p-4"
    >
      <RouteButtons />

      <SocialButtons />
    </div>
  )
};

export default Sider;
