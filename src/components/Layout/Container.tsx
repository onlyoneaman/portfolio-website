const Container = ({children}) => {

  return (
    <div
      className="max-w-xl mx-auto grow p-6 sm:p-9 md:px-12 md:py-20"
    >
      {children}
    </div>
  );
};

export default Container;
