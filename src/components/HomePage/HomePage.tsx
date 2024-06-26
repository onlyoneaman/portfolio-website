import Container from "@/components/Layout/Container.js";
import {Typewriter} from 'react-simple-typewriter';
import {Button} from "@/components/ui/button.js";
import ContactButton from "@/components/Common/ContactButton.js";
import EmailButton from "@/components/Common/EmailButton.js";

const HomePage = () => {

  return (
    <Container>
      <div
        className="space-y-4 p-5 md:p-12"
      >
        <h1
          className="text-4xl font-medium"
        >
          {"Hey, I'm Aman"}
        </h1>
        <h2
          className="text-3xl font-medium"
        >
          I love to{" "}
          <span
            className="text-gray-500"
          >
            <Typewriter
              words={['Code', 'Design', 'Build', 'Innovate']}
              cursor
            />
          </span>
        </h2>

        <div
          className="text-md tracking-wider font-light space-y-3 md:space-y-5"
        >
          <p>
            A Full-Stack Dev and AI Enthusiast, I have built multiple products in past 4 years, latest being an LLMOps
            Platform. Raised $100K for Engagebud.
            I have worked with startups in US, India.
          </p>

          <p>
            I help starups and businesses built their web applications and apps. As a Full Stack Developer, I can build
            you
            product from scratch or help you with your existing product.
          </p>

          <p>
            Talk to me about AI, new ideas, life, or anything else.
          </p>
        </div>

        <div
          className="flex items-center gap-3"
        >
          <ContactButton/>

          <EmailButton/>
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
