import {
  FaGithub, FaTwitter
} from 'react-icons/fa'

const SocialButtons = () => {

  const socialLinks = [
    {
      icon: <FaGithub/>,
      title: "Github",
      link: "https://github.com/onlyoneaman"
    },
    {
      icon: <FaTwitter/>,
      title: "Twitter",
      link: "https://twitter.com/onlyoneaman"
    }
  ]

  return (
    <div
      className="space-x-2"
    >
      {
        socialLinks.map((socialLink, index) => {
          return (
            <a
              className="cursor-pointer space-x-2 flex items-center hover:bg-gray-300 rounded-md p-2"
              href={socialLink.link}
              key={index}
            >
              <span>
                {socialLink.icon}
              </span>
              <span>
                {socialLink.title}
              </span>
            </a>
          )
        })
      }
    </div>
  );
};

export default SocialButtons;
