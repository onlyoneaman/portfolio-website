const Footer = () => {

  return(
    <div
      className="flex border-t-[0.5px] text-gray-500 border-gray-700 justify-center items-center h-8 md:h-20 space-x-3 gap-2 text-sm"
    >
      <span className="text-white">Made by</span>Aman Kumar | {new Date().getFullYear()} amankumar.ai
    </div>
  )
};

export default Footer;
