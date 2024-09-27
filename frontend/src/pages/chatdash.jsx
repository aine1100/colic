import Sidenav from "../components/sidenav";
import user1 from "../../public/user1.png"
import { FaSearch,FaBell,  FaChevronDown } from "react-icons/fa";
import user2 from "../../public/user2.png"
import user3 from "../../public/user3.png"
import user4 from "../../public/user4.png"
import user5 from "../../public/user5.png"
import user6 from "../../public/user6.png"
import user7 from "../../public/user7.png"
import user8 from "../../public/user8.png"
import user9 from "../../public/user9.png"
import user10 from "../../public/user10.png"

export const Chatdash = () => {
  const userData=[
    {id:1, image:user2, names:"Kagabo Jean Remy"},
    {id:2,image:user8,  names:"Uwase Vanessa"},
    {id:3,image:user6,  names:"Andy Melvin"},
    {id:4,image:user10,  names:"Beyonce Priase"},
    {id:5,image:user3, names:"Bwiza Official" },
    {id:6, image:user4, names:"Butera Knowless"},
    {id:7, image:user5, names:"Anifa Gaella"},
    {id:8,image:user7 , names:"Keza Joanna"},
    {id:9,image:user9 , names:"Mike Peter"}
  ]

  return (
    <div className=" flex bg-black w-full h-screen text-white">
                <Sidenav/>
      <div className="flex flex-col w-[100%]">
        <div className="flex justify-between mt-10 ">
          <h2 className="font-bold">Client Chat</h2>
         <div className="flex mr-10 gap-5">
        <FaSearch className=" h-[100%]"/>
        <FaBell className=" h-[100%]"/>
         <div className="flex items-center gap-2">
          <img src={user1} alt="user profile" className="w-[50%]"/>
          <FaChevronDown/>
         </div>
          </div>   
        </div>

     <div className="flex flex-col bg-soft_black w-[50%] max-h-[100%] overflow-y-auto container ">
      <div  className="rounded-full flex gap-4 items-center bg-[#ADADAD] w-[80%] mx-auto p-1 mt-5">
        <FaSearch className="ml-4"/>
        <input type="text" placeholder="Search for client" className="bg-[#ADADAD] rounded-full outline-none placeholder-white"/>
        </div>
        <div className="mt-10" >
         {userData.map(user =>(
          <div key={user.id}className="flex justify-between mb-10 items-center ml-4 ">
          <div className="flex gap-4 items-center ">
             <img src={user.image} alt="user"/>
             <p>{user.names}</p>
          </div>
           <p className="mr-10 text-[#A3A3A3] text-[80%]">20:30 PM</p>
          </div>
         ))}
        </div>
      
    

     </div>

        </div>          
    </div>
  )
}

export default Chatdash;