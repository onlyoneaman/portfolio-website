const Sider = () => {

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
      className="w-1/5 h-screen bg-gray-200"
    >
      Sider

      {
        links.map((link, index) => {
          return (
            <div
              key={index}
              className="p-2"
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

export default Sider;
