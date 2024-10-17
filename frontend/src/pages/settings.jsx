import { FaBell, FaChevronDown, FaChevronLeft, FaSearch } from "react-icons/fa";
import Sidenav from "../components/sidenav"
import user1 from "../../public/user1.png"
import {useState} from 'react'
import aperture from '../../public/Aperture.png'
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";


const Settings= () =>{
 const[toggle,setToggle]=useState(false);

 
 const handleClick=()=>{
  setToggle(!toggle); 
 }

    return (
        <div className="bg-black flex">
            <Sidenav/>
            <div className="w-[100%] h-[100%] flex flex-col  overflow-hidden">
            <div className="flex justify-between items-center mt-5 mb-5">
                <h1 className="text-white font-bold ">Settings</h1>
                <div className="flex items-center gap-4 mr-5">
                    <FaSearch className="text-white hidden sm:text-[100%] md:block text-[120%]  lg:text-[150%]"/>
                    <FaBell className="text-white hidden sm:text-[100%] md:block text-[120%]  lg:text-[150%]"/>
                    <img src={user1} alt="user profile" className="md:w-[50%]"/>
                    <FaChevronDown className="text-white hidden  sm:text-[100%] md:block text-[120%]  lg:text-[150%]"/>
                </div>
            </div>
            <div className="w-full min-h-screen bg-[#040405]  flex flex-col gap-40 ">
              <div className="flex justify-between mt-10  mx-8">
                <div className="w-[50%] h-[30%] bg-[#0a0b0c] px-7 py-5  rounded-xl">
                <div className="flex gap-4 mb-4">
                    <FaBell className="text-[#fff] text-[120%]"/>
                    <h2 className="text-[#fff] font-semibold md:text-[80%]">Notifications</h2>
                </div>
            
                  
                   <div className="flex justify-between items-center mb-4">
                   <p className="text-white sm:text-[50%] md:text-[70%] lg:text-[100%]">Allow popup on your screen</p>
                   <button className="flex items-center justify-center gap-2 sm:w-[10%] md:w-[20%] lg:w-[30%] "  onClick={()=>{handleClick()}}>
                       <p className="text-white font-bold sm:text-[50%] md:text-[70%] lg:text-[100%]">{toggle ? 'ON':'OFF'}</p>
                       <div className={`${toggle  ? "sm:w-[20%] md:w-[30%] lg:w-[45%]  rounded-full py-1.5 bg-[#B50418] flex items-start relative" : "sm:w-[20%] sm:py-0 md:w-[30%] md:py-1 lg:w-[45%] rounded-full py-1.5 bg-[#000] flex items-start "}`}>
                         <div className="sm:w-[5%]  md:w-[7%] lg:w-[10%] p-3 rounded-full bg-white ml-1 "></div>
                       </div>
                   </button>
                 </div>
 
                 <div className="flex justify-between items-center mb-4">
                   <p className="text-white sm:text-[50%] md:text-[70%] lg:text-[100%]">Do not Disturb</p>
                   <button className="flex items-center justify-center gap-2 sm:w-[10%] md:w-[20%] lg:w-[30%]"  onClick={()=>{handleClick()}}>
                       <p className="text-white font-bold sm:text-[50%] md:text-[70%] lg:text-[100%]">{toggle ? 'ON':'OFF'}</p>
                       <div className={`${toggle ? "sm:w-[20%] md:w-[30%] lg:w-[45%]  rounded-full py-1.5 bg-[#B50418] flex items-start relative" : "sm:w-[20%] sm:py-0 md:w-[30%] md:py-1 lg:w-[45%] rounded-full py-1.5 bg-[#000] flex items-start "}`}>
                         <div className="sm:w-[5%]  md:w-[7%] lg:w-[10%] p-3 rounded-full bg-white ml-1 "></div>
                       </div>
                   </button>
                 </div> 
                
                  
  
                 
              
                            </div>  
                
                 <div className="w-[30%] h-[30%] bg-[#0a0b0c] px-7 py-5 rounded-xl">
                <div className="flex gap-4 mb-4">
                    <FiMessageSquare className="text-white text-[150%]"/>
                    <h2 className="text-[#fff] font-semibold">Chat</h2>
                </div>
                <Link to={"/styles"}>
                  <div className="flex justify-between items-center mb-4 bg-[#000000] p-2">
                    <p className="text-white">Styles</p>
                     <FaChevronLeft className="text-white" />
                    </div>
                </Link>
                  <div className="flex justify-between items-center bg-[#000000] p-2 ">
                  <p className="text-white">Chat history</p>
                  <FaChevronLeft className="text-white"/>
                </div>
                </div>
              </div>

<div className="flex justify-between mx-8">
  
              <div className="w-[50%] h-[30%] bg-[#0a0b0c] px-7 py-5  rounded-xl">
                <div className="flex gap-4 mb-4">
                    <img src={aperture} alt="camera"/>
                    <h2 className="text-[#fff] font-semibold">Activity</h2>
                </div>
                <Link to={"/calendar"}>
                  <div className="flex justify-between items-center mb-4 bg-[#000000] p-2">
                    <p className="text-white">Setting Working Hours</p>
                     <FaChevronLeft className="text-white" />
                    </div>
                </Link>
  
                  <Link to={"/progress"}>
                    <div className="flex justify-between items-center bg-[#000000] p-2 ">
                    <p className="text-white">Track Your Progress</p>
                    <FaChevronLeft className="text-white"/>
                                    </div>
                  </Link>
                </div>
  
  
  
  
  
  
                <div className="w-[30%] h-[30%] bg-[#0a0b0c] px-7 py-5 rounded-xl">
                <div className="flex gap-4 mb-4">
                    <FiMessageSquare className="text-white text-[150%]"/>
                    <h2 className="text-[#fff] font-semibold">Portofolio</h2>
                </div>
                <div className="flex justify-between items-center mb-4 bg-[#000000] p-2">
                  <p className="text-white">Upload collection</p>
                   <FaChevronLeft className="text-white" />
                  </div>
  
                  <div className="flex justify-between items-center bg-[#000000] p-2 ">
                  <p className="text-white">Connect</p>
                  <FaChevronLeft className="text-white"/>
  
                </div>
                </div>
</div>
              
             
            </div>  

       
       
            </div>

            </div>
    )
}

export default Settings;


// absolute top-[10%] left-[5%]
// absolute bottom-[10%] left-[5%]
// absolute bottom-[10%] right-[5%]
// absolute top-[10%] right-[5%]  