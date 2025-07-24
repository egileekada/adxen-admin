import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { plans } from "@/components/utils/databank"
import { RiCheckLine, RiListCheck } from "@remixicon/react"
import { useState } from "react"

export default function SelectPlans() {

    const [value, setValue] = useState("0")

    const one = ` ${value === "0" ? "  border-blue-infomative " : value === "1" ? " border-r-0 " : " border-r-0 border-border-darker "} w-full rounded-l-2xl flex flex-col cursor-pointer gap-3 p-4 border `
    const two = ` ${value === "1" ? "  border-blue-infomative " : value === "2" ? " border-r-0 " : value === "0" ? " border-l-0 " : " border-l-0 border-border-darker "} cursor-pointer border w-full flex flex-col gap-3 p-4 `
    const three = ` ${value === "2" ? "  border-blue-infomative " : " border-l-0 border-border-darker "} cursor-pointer border w-full flex flex-col gap-3 p-4 rounded-r-2xl `

    return (
        <RadioGroup defaultValue={value} onValueChange={setValue}>
            <div className=" w-full flex text-default " >
                {plans.map((item, index) => {
                    return (
                        <label htmlFor={item.name} className={index === 0 ? one : index === 1 ? two : three}>
                            <div className=" w-full flex justify-between items-center " >
                                <p className=" font-semibold " >{item.name}</p>
                                <RadioGroupItem value={index + ""} className=" mt-[2px] " id={item.name} />
                            </div>
                            <p className=" text-sm text-subtle " >{item.detail}</p>
                            <div className=" w-full grid grid-cols-2 gap-2 pt-8 pb-3 border-b " >
                                <p className=" text-sm font-medium " >Monthly fee</p>
                                <p className=" text-sm font-medium text-right " >€9.9/mo</p>
                                <p className=" text-sm font-medium " >Per top-up fee</p>
                                <p className=" text-sm font-medium text-right " >5%</p>
                            </div>
                            <div className=" w-full text-sm text-subtle flex flex-col gap-2 " >
                                {item.features.map((subitem, subindex) => {
                                    return (
                                        <div className=" flex w-full gap-3 " >
                                            <RiCheckLine size={"20px"}  />
                                            <p className="" >{subitem}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </label>
                    )
                })}
                {/* <label htmlFor="r2" className={` ${value === "vip" ? "  border-blue-infomative " :value === "vvip" ? " border-r-0 " : value === "regular" ? " border-l-0 " : " border-l-0 border-border-darker "} cursor-pointer border w-full flex gap-3 p-4 `}>
                    <RadioGroupItem value="vip" className=" mt-[2px] " id="r2" />
                    <div className=" flex flex-col " >
                        <p className=" text-sm font-medium " >Business</p>
                        <p className=" text-sm " >For companies or agencies managing multiple accounts.</p>
                    </div>
                </label>
                <label htmlFor="r3" className={` ${value === "vvip" ? "  border-blue-infomative " : " border-l-0 border-border-darker "} cursor-pointer border w-full flex gap-3 p-4 rounded-r-2xl   `}>
                    <RadioGroupItem value="vvip" className=" mt-[2px] " id="r3" />
                    <div className=" flex flex-col " >
                        <p className=" text-sm font-medium " >Business</p>
                        <p className=" text-sm " >For companies or agencies managing multiple accounts.</p>
                    </div>
                </label> */}
            </div>
        </RadioGroup>
    )
}