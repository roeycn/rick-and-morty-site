import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import {SidebarIcon} from "../SideBarIcon/sidebarIcon";
import {NextPageWithLayout} from "../../../pages/page";
import {Divider} from "../Divider/divider";



const Sidebar: NextPageWithLayout = () => {
    return (
        <div
            className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
        >
            <SidebarIcon icon={<FaFire size="28" />} text={"main"}/>
            <Divider />
            <SidebarIcon icon={<BsPlus size="32" />} text={"plus"}/>
            <SidebarIcon icon={<BsFillLightningFill size="20" />} text={"lighting"}/>
            <SidebarIcon icon={<FaPoo size="20" />} text={"poo"}/>
            <Divider />
            <SidebarIcon icon={<BsGearFill size="22" />} text={"settings"}/>

        </div>
    );
};

export default Sidebar;

