import Container from "@/components/Layout/Container.js";
import ContainerTitle from "@/components/Common/ContainerTitle.js";

const ContactPage = () => {

  return (
    <div className="space-y-4">
      <ContainerTitle
        title={"Get in Touch"}
      />

      <h2>
        If you're building in / excited about AI or just wanna chat, let's connect.
      </h2>

      <div>
        <span>
          Call Button
        </span>
        <span>
          Email Button
        </span>
      </div>
      <div>
        Contact Form
      </div>

      <div>
        Subscribe to Newsletter
      </div>
    </div>
  );
};

export default ContactPage;
