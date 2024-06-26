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
      className="space-x-2 py-5"
    >
      <span
        className="text-sm"
      >
        Follow
      </span>
      <div>
        {
          socialLinks.map((socialLink, index) => {
            return (
              <a
                className={
                  `flex items-center justify-start gap-2 cursor-pointer py-1.5 hover:text-white rounded-md text-sm ` +
                  `text-gray-400 `
                }
                href={socialLink.link}
                key={index}
                target={"_blank"}
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
    </div>
  );
};

export default SocialButtons;
