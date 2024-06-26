import SocialButtons from "@/components/Layout/Sider/SocialButtons.js";
import RouteButtons from "@/components/Layout/Sider/RouteButtons.js";
import AvatarBox from "@/components/Layout/Sider/AvatarBox.js";

const Sider = () => {



  return (
    <div
      className="fixed left-0 max-w-[200px] w-1/4 md:w-1/6 h-screen bg-slate p-4 overflow-y-auto"
    >
      <AvatarBox />

      <RouteButtons />

      <SocialButtons />
    </div>
  )
};

export default Sider;
