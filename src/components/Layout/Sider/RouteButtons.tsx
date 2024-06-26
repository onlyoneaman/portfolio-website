import {Link} from "react-router-dom";

const RouteButtons = () => {
  const links = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/about",
      name: "About"
    },
    {
      path: "/contact",
      name: "Contact"
    },
  ]

  const activeLink = window.location.pathname;

  return (
    <div
      className="space-y-1"
    >
      {
        links.map((link, index) => {
          return (
            <Link
              className={
              `block cursor-pointer py-1.5 px-2 hover:text-white rounded-md text-sm ` +
                (activeLink === link.path ? " bg-gray-600 text-white " : "")
              }
              key={index}
              to={link.path}
            >
              {link.name}
            </Link>
          )
        })
      }
    </div>
  )
};

export default RouteButtons;
