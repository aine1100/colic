// import { FaAudioDescription, FaMicrophone, FaVideo } from "react-icons/fa";
import Sidenav from "../components/sidenav";

export const Chatdash = () => {
  const userData=[
    {id:1,  names:"Kagabo Jean Remy"},
    {id:2,  names:"Uwase Vanessa"},
    {id:3,  names:"Andy Melvin"},
    {id:4,  names:"Beyonce Priase"},
    {id:5, names:"Bwiza Official" },
    {id:6, names:"Butera Knowless"},
    {id:7, names:"Anifa Gaella"},
    {id:8, names:"Keza Joanna"},
    {id:9, names:"Mike Peter"}
  ]

  return (
    <div className="bg-black w-full h-screen text-white">
                <Sidenav/>
    </div>
  )
}

export default Chatdash;