import heart from "../images/love.webp";
const Relationship = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className=" flex flex-row gap-20  items-center">
        <img
          src={heart}
          alt=""
          className="w-[100px] h-[80px] -rotate-45 opacity-50"
        />
        <h2 className="text-[40px]">
          Looking for <span className="font-bold">some Relationship</span>
        </h2>
        <img
          src={heart}
          alt=""
          className="w-[150px] h-[120px] rotate-45 opacity-75"
        />
      </div>
      <div className="flex gap-24 pt-10 flex-wrap">
        <div className="bg-blue-400 bg-opacity-70 w-[400px] h-[150px] rounded-tl-3xl rounded-br-3xl flex gap-2 flex-col  text-center justify-center">
          <div className="flex gap-10 items-center pl-10">
            <p className="bg-white shadow-md text-red-400 rounded-[50%] w-[40px] h-[40px] text-center flex items-center justify-center">
              1
            </p>
            <h2 className="font-semibold text-[25px]" >No fakes</h2>
          </div>
          <p className="text-[13px] text-[#383535]" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi velit
            odio eaque
          </p>
        </div>

        <div className="bg-blue-300 bg-opacity-70 w-[400px] h-[150px] rounded-tl-3xl rounded-br-3xl flex gap-2 flex-col  text-center justify-center ">
        <div className="flex gap-10 items-center pl-10 flex-wrap">
            <p className="bg-white shadow-md text-red-400 rounded-[50%] w-[40px] h-[40px] text-center flex items-center justify-center">
              2
            </p>
            <h2 className="font-semibold text-[25px]" >Opportunity</h2>
          </div>
          <p className="text-[13px] text-[#383535]" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi velit
            odio eaque
          </p>
        </div>
      </div>
      <div className="flex gap-10 pt-10 pl-20 flex-wrap">
        <div className="bg-red-300 bg-opacity-70 w-[450px] h-[150px] rounded-tl-3xl rounded-br-3xl flex gap-2 flex-col  text-center justify-center">
        <div className="flex gap-10 items-center pl-10">
            <p className="bg-white shadow-md text-red-400 rounded-[50%] w-[40px] h-[40px] text-center flex items-center justify-center">
              3
            </p>
            <h2 className="font-semibold text-[25px]" >Easy to use</h2>
          </div>
          <p className="text-[15px]" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi velit
            odio eaque
          </p>
        </div>
        <div className="bg-red-200 bg-opacity-70 w-[450px] h-[150px] rounded-tl-3xl rounded-br-3xl flex gap-2 flex-col  text-center justify-center">
        <div className="flex gap-10 items-center pl-10">
            <p className="bg-white shadow-md text-red-400 rounded-[50%] w-[40px] h-[40px] text-center flex items-center justify-center">
              4
            </p>
            <h2 className="font-semibold text-[25px]" >Mobile apps</h2>
          </div>
          <p className="text-[15px]" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi velit
            odio eaque
          </p>
        </div>
      </div>
      <div className="pt-20 flex gap-52">
      <img src={heart} alt="" className="h-[100px] w-[150px] opacity-45 -rotate-12 " />
      <img src={heart} alt="" className="h-[100px] w-[150px] opacity-45   " />
      <img src={heart} alt="" className="h-[100px] w-[150px] opacity-45  rotate-12" />



      </div>
    </div>
  );
};

export default Relationship;
