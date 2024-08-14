import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const StepProgressBar = () => {
  return (
    <ProgressBar
      percent={40} 
      filledBackground="linear-gradient(to right, #8b0000, #8b0000)"
      width="100%"
    >
      <Step transition="scale">
        {({ accomplished }) => (
          <div className={`flex flex-col items-center ${accomplished ? 'text-red-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 mt-5  rounded-full ${accomplished ? 'bg-red-600' : 'bg-gray-400'}`}></div>
            <span className=" text-sm">Explore</span>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div className={`flex flex-col items-center ${accomplished ? 'text-red-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full ${accomplished ? 'bg-red-600' : 'bg-gray-400'}`}></div>
            <span className="mt-2 text-sm">Choose</span>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div className={`flex flex-col items-center ${accomplished ? 'text-red-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full ${accomplished ? 'bg-red-600' : 'bg-gray-400'}`}></div>
            <span className="mt-2 text-sm">Sign in</span>
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default StepProgressBar;
