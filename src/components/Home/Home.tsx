import Sider from "@/components/Layout/Sider.js";
import HomePage from "@/components/HomePage/HomePage.js";
import Footer from "@/components/Layout/Footer.js";
import {Route, Routes} from "react-router-dom";
import AboutPage from "@/components/AboutPage/index.js";
import ContactPage from "@/components/ContactPage/index.js";

const Home = () => {

  const routes = [
    {
      path: "/",
      name: "Home",
      component: HomePage
    },
  ]

  return (
    <div
      className="flex items-stretch"
    >
      <Sider/>
      <div
        className="w-4/5 min-h-full flex flex-col bg-gray-100 overflow-y-scroll"
      >
        <Routes>
          <Route
            index
            element={<HomePage/>}
          />
          <Route
            path="/about"
            element={<AboutPage/>}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
        </Routes>
        <Footer/>
      </div>
    </div>
  )
};

export default Home;
