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

  return (
    <div
      className="space-y-2"
    >
      {
        links.map((link, index) => {
          return (
            <Link
              className="block cursor-pointer p-2 hover:bg-gray-300 rounded-md"
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
