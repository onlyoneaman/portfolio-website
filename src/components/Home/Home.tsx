import Sider from "@/components/Layout/Sider.js";
import HomePage from "@/components/HomePage/HomePage.js";

const Home = () => {

  return(
    <div
      className="flex"
    >
      <Sider />
      <HomePage />
    </div>
  )
};

export default Home;
