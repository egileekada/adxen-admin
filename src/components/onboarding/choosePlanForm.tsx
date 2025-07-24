import { useNavigate } from "react-router-dom";
import { CustomButton } from "../custom";
import { Switch } from "../ui/switch";
import SelectPlans from "./components/selectPlans";
import { RiCornerUpRightLine } from "@remixicon/react";

export default function ChoosePlanForm() {

    const navigate = useNavigate()

    return (
        <div className=" max-w-[840px] gap-6 w-full flex flex-col " >
            <p className=" font-semibold text-3xl text-default " >{`Select a plan that fits your goals.`}</p>
            <div className=" flex gap-3 " >
                <Switch />
                <p className=" text-sm font-medium ">Yearly plans </p>
                <div className=" w-[68px] h-[20px] text-xs text-basic-green rounded-sm bg-badge-green-10 flex justify-center items-center " >
                    Save 30%
                </div>
            </div>
            <SelectPlans />
            <div className=" flex gap-3 text-sm " > 
                <CustomButton onClick={() => navigate("/onboarding?type=success")} className=" w-fit px-4 " >
                    <p>Upgrade</p>
                    <RiCornerUpRightLine />
                </CustomButton>
                <CustomButton variant={"outline"} className=" " >
                    Continue with free
                </CustomButton>
            </div>
        </div>
    )
}