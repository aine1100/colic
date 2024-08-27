import { FaRegUserCircle, FaRegCalendar } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import sideData from './side.json';

const icons = {
    FaRegUserCircle: <FaRegUserCircle className="w-[15px] h-[15px]" />,
    FaRegCalendar: <FaRegCalendar className="w-[15px] h-[15px]" />,
    FiMessageSquare: <FiMessageSquare className="w-[15px] h-[15px]" />,
    IoSettingsSharp: <IoSettingsSharp className="w-[15px] h-[15px]" />,
};

export default function Sidenav() {
    return (
        <div className="bg-[#000] w-[304px] h-screen top-0 bottom-0">
            <img className="w-[304px] h-[86px]" src="/copic.png" alt="logo" />
            <div className="flex flex-col">
                {sideData.map((item, index) => (
                    <button
                        key={index}
                        className={`w-[304px] h-[2.65rem] pl-[${item.icon === '/dash.png' ? '3rem' : '3.2rem'}] flex items-center gap-[0.5rem] text-[12px] ${
                            item.active ? 'text-white border-l-[#86070C] border-l-[4px] bg-[#161616] pl-[3rem]' : 'text-[#686868] pl-[3rem]'
                        }`}
                    >
                        {item.icon === '/dash.png' ? (
                            <img className="w-[15px] h-[15px]" src={item.icon} alt={item.label} />
                        ) : (
                            icons[item.icon]
                        )}
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
