import Sider from "@/components/Layout/Sider.js";
import HomePage from "@/components/HomePage/HomePage.js";
import Footer from "@/components/Layout/Footer.js";

const Home = () => {

  return(
    <div
      className="flex items-stretch"
    >
      <Sider />
      <div
        className="w-4/5 min-h-full flex flex-col bg-gray-100 overflow-y-scroll"
      >
        <HomePage />
        <Footer />
      </div>
    </div>
  )
};

export default Home;
