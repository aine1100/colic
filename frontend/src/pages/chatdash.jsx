import { FaAudioDescription, FaMicrophone, FaVideo } from "react-icons/fa";
import Sidenav from "../components/sidenav";
import UserImage from "../images/user.png"

export const Chatdash = () => {
  return (
    <div className="bg-black w-full h-screen text-white flex gap-5">
                <Sidenav/>
              <div className="flex flex-col gap-10 bg-[#817575] bg-opacity-10 rounded-md  ">
              <div className="flex justify-center items-start bg-black p-7 ">
                   <div className="flex gap-12 items-center justify-center">
                   <img src={UserImage} alt="" className="w-20 h-20 rounded-[50%]" />
                   <p className="text-[25px]">Dave Robinson</p>

                   </div>
                   <div className="flex gap-20 items-center mt-5 pl-[600px] justify-center">
                  <FaVideo className="text-[40px]"/>
                  <FaMicrophone className="text-[40px]"/>
                   </div>
                </div>
                <div className=" rounded-md ">

                </div>

              </div>
    </div>
  )
}

export default Chatdash;