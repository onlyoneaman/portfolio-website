import Sider from "@/components/Layout/Sider/Sider.js";
import HomePage from "@/components/HomePage/HomePage.js";
import Footer from "@/components/Layout/Footer.js";
import {Route, Routes} from "react-router-dom";
import AboutPage from "@/components/AboutPage/index.js";
import ContactPage from "@/components/ContactPage/index.js";
import SeoPart from "@/components/Layout/SeoPart.js";

const Home = () => {

  return (
    <>
      <SeoPart />
      <div
        className="flex items-stretch min-w-full"
      >
        <Sider/>
        <div
          className="grow min-h-full flex flex-col bg-gray-100 overflow-y-scroll"
        >
          <Routes>
            <Route
              element={<HomePage/>}
              index
            />
            <Route
              element={<AboutPage/>}
              path="/about"
            />
            <Route
              element={<ContactPage />}
              path="/contact"
            />
          </Routes>
          <Footer/>
        </div>
      </div>
    </>
  )
};

export default Home;
