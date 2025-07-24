import { RiCornerUpRightLine } from "@remixicon/react";
import { CustomButton } from "../custom";
import { useNavigate } from "react-router-dom";

export default function SuccessMessage() {

    const navigate = useNavigate()

    return (
        <div className=" max-w-[618px] gap-6 w-full flex flex-col " >
            <img alt="success" src="/images/success.png" className=" w-10  " />
            <div className=" flex flex-col gap-2 " > 
                <p className=" font-semibold text-3xl text-default " >{`You're all set!`}</p>
                <p className=" text-subtle " >{`We're setting up your workspace. Redirecting to your dashboard...`}</p> 
            </div>
            <CustomButton onClick={() => navigate("/dashboard")} className=" w-fit px-4 " >
                <p>Continue to dashboard</p>
                <RiCornerUpRightLine />
            </CustomButton>
        </div>
    )
}