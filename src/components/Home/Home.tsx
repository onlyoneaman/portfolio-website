import Sider from "@/components/Layout/Sider/Sider.js";
import HomePage from "@/components/HomePage/HomePage.js";
import Footer from "@/components/Layout/Footer.js";
import {Route, Routes} from "react-router-dom";
import AboutPage from "@/components/AboutPage/index.js";
import ContactPage from "@/components/ContactPage/index.js";
import SeoPart from "@/components/Layout/SeoPart.js";
import Container from "@/components/Layout/Container.js";

const Home = () => {

  return (
    <>
      <SeoPart />
      <div
        className="flex items-stretch min-w-full"
      >
        <Sider/>

        <div
          className="grow ml-[200px] min-h-screen flex flex-col bg-primary overflow-y-scroll"
        >
          <Container>
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
          </Container>

          <Footer/>
        </div>
      </div>
    </>
  )
};

export default Home;
