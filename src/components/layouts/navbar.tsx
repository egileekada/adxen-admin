import { useState } from "react"
import { Input } from "../ui/input"
import { RiNotification2Line, RiQuestionFill } from "@remixicon/react"
import { useModal } from "@/hooks/use-modal";
import { SidebarTrigger } from "../ui/sidebar";


export default function Navbar() {

    const [search, setSearch] = useState("")
    const { openModal } = useModal();

    return (
        <div className=" w-full h-[64px] flex justify-between items-center " >
            <Input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                value={search}
                className={` max-w-[420px] lg:flex hidden w-full h-[38px] px-4 bg-[#27272A0F] border rounded-md border-[#EAEBED] `}
                placeholder={"Search"}
            />
            <div className=" lg:hidden flex gap-2 items-center " >
                <SidebarTrigger className="-ml-1" /> 
            <img src="/images/logo.png" alt="logo" className=" w-[100px] " />
            </div>
            <div className=" flex gap-3 items-center " >
                <div className=" w-fit h-[28px] flex px-2 gap-1 rounded-full border justify-center items-center border-dotted " >
                    <RiQuestionFill size={"16px"} color="#A1A1A9" />
                    <p className=" text-xs font-medium text-default " >Help</p>
                </div>
                <div onClick={() => openModal("notification")} className=" cursor-pointer " >
                    <RiNotification2Line size={"20px"} />
                </div>
            </div>
        </div>
    )
}