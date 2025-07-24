import { RiCornerUpRightLine } from "@remixicon/react";
import { CustomButton, CustomInput } from "../custom";
import { useQuery } from "../utils/useQuery";
import SelectAccountType from "./components/selectAccountType";
import { useNavigate } from "react-router-dom";

export default function AccountTypeForm() {

    const query = useQuery();
    const navigate = useNavigate()
    const business = query.get('business');
    const changeHandler = (item: string, value: string) => {
        console.log(item + " " + value);
    }

    return (
        <>
            {!business && (
                <div className=" max-w-[478px] gap-6 w-full flex flex-col " >
                    <p className=" font-semibold text-3xl text-default " >{`Welcome to Adxens,Let's get your first ad account ready.`}</p>
                    <p className=" text-subtle " >Choose account type</p>
                    <SelectAccountType />
                    <CustomButton onClick={() => navigate("/onboarding?type=account&business=true")} className=" w-fit px-4 " >
                        <p>Continue</p>
                        <RiCornerUpRightLine />
                    </CustomButton>
                </div>
            )}
            {business && (
                <div className=" max-w-[478px] gap-6 w-full flex flex-col " >
                    <p className=" font-semibold text-3xl text-default " >{`Tell us more about your business.`}</p>
                    <p className=" text-subtle " >Business details</p>
                    <div className=" w-full flex flex-col gap-5 " >
                        <CustomInput placeholder="" label="Company name *" name={""} setValue={changeHandler} />
                        <CustomInput placeholder="" label="Company address *" name={""} setValue={changeHandler} />
                        <CustomInput placeholder="" label="What's the size of your business? *" name={""} setValue={changeHandler} />
                        <CustomInput placeholder="" label="What type of business do you run? *" name={""} setValue={changeHandler} />
                    </div>
                    <CustomButton onClick={() => navigate("/onboarding?type=ads")} className=" w-fit px-4 " >
                        <p>Continue</p>
                        <RiCornerUpRightLine />
                    </CustomButton>
                </div>
            )}
        </>
    )
}