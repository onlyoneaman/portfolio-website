import Container from "@/components/Layout/Container.js";
import aboutImg from '@/assets/about.png';

const AboutPage = () => {

  return (
    <Container>
      <div
        className="space-y-3"
      >
        <h1>About Page</h1>
        <h3>
          Full-Stack Dev | AI Engineer | Software | AI | LLMs | Travel | Music | F1
        </h3>

        <img
          src={aboutImg}
          alt="about"
          className="h-auto"
        />

        <p>
          Hello! My name is Aman, based out of Bengaluru and I enjoy creating things that live on the internet.
          I have been playing around with code since 2018. I often write about AI, LLMs, Frontend Dev, React, Backend, Rails and DBs.
          Currently I am working as an independent consultant. I use my expertise in developing fast and clean software to help fast-growing startups build out their MVPs / Apps.

          Earlier, I have built multiple products leading development and design for some of them. Some of them are Dreamboat.ai, Engagebud, Influencerbit.

          I am amazed by LLMs / AI, With LLMs, a lot of boring tasks will be automated and workflows are going to completely revolutionize from what we see today. I want to be at the forefront of this change.

          I love music (Techno, House), am deep into F1 and love GoKarting, & chess.
        </p>

        <div>
        <span>
          Get in touch button
        </span>
          <span>
          Email button
        </span>
        </div>
      </div>
    </Container>
  )
};

export default AboutPage;
