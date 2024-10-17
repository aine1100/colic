const ErrorBoundary = () => {
    return (
        <div className="flex flex-col items-center w-[100%] h-screen bg-black text-[200%] ">
          <h2 className="text-white mt-5   font-bold">Page Not found</h2>
          <h2 className="underline text-[#AF1E30] mt-1">ON</h2>
          <img className="w-[304px] h-[86px]" src="/copic.png" alt="logo" />
        </div>
      );
}
 
export default ErrorBoundary;