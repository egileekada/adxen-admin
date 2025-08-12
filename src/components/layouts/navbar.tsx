import { useState } from "react"
import { Input } from "../ui/input"
import { RiNotification2Line, RiQuestionFill } from "@remixicon/react"
import { useModal } from "@/hooks/use-modal";


export default function Navbar() {

    const [search, setSearch] = useState("")
    const { openModal } = useModal();

    return (
        <div className=" w-full h-[64px] flex justify-between " >
            <Input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                value={search}
                className={` max-w-[420px]  w-full h-[38px] px-4 bg-[#27272A0F] border rounded-md border-[#EAEBED] `}
                placeholder={"Search"}
            />
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