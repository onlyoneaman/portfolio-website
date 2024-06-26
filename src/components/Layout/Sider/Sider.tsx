import SocialButtons from "@/components/Layout/Sider/SocialButtons.js";
import RouteButtons from "@/components/Layout/Sider/RouteButtons.js";
import AvatarBox from "@/components/Layout/Sider/AvatarBox.js";

const Sider = () => {

  return (
    <div
      className="fixed left-0 min-w-[200px] md:w-1/6 h-screen bg-slate p-4 py-10 overflow-y-auto
      text-gray-500"
    >
      <AvatarBox />

      <RouteButtons />

      <SocialButtons />
    </div>
  )
};

export default Sider;
