import { RiCornerUpRightLine } from "@remixicon/react";
import { CustomButton, CustomInput } from "../custom";
import { useNavigate } from "react-router-dom";

export default function AdvertisingInfoForm() {

    const navigate = useNavigate()
    const changeHandler = (item: string, value: string) => {
        console.log(item + " " + value);
    }

    return (
        <div className=" max-w-[478px] gap-6 w-full flex flex-col " >
            <p className=" font-semibold text-3xl text-default " >{`Help us tailor your experience`}</p>
            <div className=" w-full flex flex-col gap-5 " >
                <CustomInput placeholder="" label="Average monthly advertising budget *" name={""} setValue={changeHandler} />
                <CustomInput placeholder="" label="Have you ever used agency-managed ad accounts before? *" name={""} setValue={changeHandler} />
                <CustomInput placeholder="" label="How did you hear about us *" name={""} setValue={changeHandler} />
            </div>
            <CustomButton onClick={() => navigate("/onboarding?type=plan")} className=" w-fit px-4 " >
                <p>Continue</p>
                <RiCornerUpRightLine />
            </CustomButton>
        </div>
    )
}