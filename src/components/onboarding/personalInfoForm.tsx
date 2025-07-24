import { RiCornerUpRightLine } from "@remixicon/react";
import { CustomButton, CustomInput } from "../custom";
import { useNavigate } from "react-router-dom";


export default function PersonalInfoForm() {

    const changeHandler = (item: string, value: string) => {
        console.log(item+" "+value);
        
    }

    const navigate = useNavigate()

    return (
        <div className=" max-w-[478px] gap-6 w-full flex flex-col " >
            <p className=" font-semibold text-3xl text-default " >{`Welcome to Adxens,Let's get your first ad account ready.`}</p>
            <p className=" text-subtle " >Tell us who you are.</p>
            <div className=" w-full flex gap-4 items-center " >
                <div className=" rounded-full w-14 h-14 bg-amber-300 " />
                <CustomButton variant={"outline"} className=" h-[28px] text-xs " >Upload</CustomButton>
                <p className=" text-xs " >JPG, GIF or PNG. 1MB Max.</p>
            </div>
            <div className=" w-full grid grid-cols-2 gap-4 " >
                <CustomInput placeholder="" label="First name" name={""} setValue={changeHandler} />
                <CustomInput placeholder="" label="Last name" name={""} setValue={changeHandler} />
                <CustomInput placeholder="" label="Phone number" name={""} setValue={changeHandler} />
                <CustomInput placeholder="" label="Country" name={""} setValue={changeHandler} />
            </div>
            <CustomButton onClick={()=> navigate("/onboarding?type=account")} className=" w-fit px-4 " >
                <p>Continue</p>
                <RiCornerUpRightLine /> 
            </CustomButton>
        </div>
    )
}