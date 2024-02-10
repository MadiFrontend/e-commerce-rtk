function Title({ children }) {
  return (
    <div className="mb-20 flex flex-col">
      <h1 className="md:text-[2rem] text-[25px] ">{children}</h1>
      {/* <div className="flex flex-col mt-8 ">
        <div className="w-[80px] h-[2px] bg-red-500 mt-1 ml-2"></div>
        <div className="w-[80px] h-[2px] bg-red-500 mt-2"></div>
      </div> */}
    </div>
  );
}

export default Title;
