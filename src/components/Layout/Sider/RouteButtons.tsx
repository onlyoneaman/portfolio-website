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

  return(
    <div
      className="space-y-2"
    >
      {
        links.map((link, index) => {
          return (
            <div
              className="cursor-pointer p-2 hover:bg-gray-300 rounded-md"
              key={index}
            >
              <a
                href={link.path}
              >
                {link.name}
              </a>
            </div>
          )
        })
      }
    </div>
  )
};

export default RouteButtons;
