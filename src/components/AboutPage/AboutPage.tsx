import aboutImg from '@/assets/about.png';
import ContainerTitle from "@/components/Common/ContainerTitle.js";
import EmailButton from "@/components/Common/EmailButton.js";
import GetInTouchButton from "@/components/Common/GetInTouchButton.js";

const AboutPage = () => {

  return (
    <>
      <div
        className="space-y-5"
      >
        <ContainerTitle
          title="Aman Kumar"
        />
        <h3
          className="text-sm"
        >
          Full-Stack Dev | AI Engineer | Software | AI | LLMs | Travel | Music | F1
        </h3>

        <img
          src={aboutImg}
          alt="about"
          className="h-auto"
        />

        <div
          className="text-sm space-y-2 text-gray-500"
        >
          <p>
            Hello! My name is Aman, based out of Bengaluru and I enjoy creating things that live on the internet.
            I have been playing around with code since 2018. I often write about AI, LLMs, Frontend Dev, React, Backend,
            Rails and DBs.
          </p>
          <p>
            Currently I am working as an independent consultant. I use my expertise in developing fast and clean
            software
            to help fast-growing startups build out their MVPs / Apps.
          </p>
          <p>
            Earlier, I have built multiple products leading development and design for some of them. Some of them are
            Dreamboat.ai, Engagebud, Influencerbit.
          </p>
          <p>
            I am amazed by LLMs / AI, With LLMs, a lot of boring tasks will be automated and workflows are going to
            completely revolutionize from what we see today. I want to be at the forefront of this change.
          </p>
          <p>
            I love music (Techno, House), am deep into F1 and love GoKarting, & chess.
          </p>
        </div>

        <div
          className="flex items-center space-x-3"
        >
          <GetInTouchButton/>

          <EmailButton/>
        </div>
      </div>
    </>
  )
};

export default AboutPage;
