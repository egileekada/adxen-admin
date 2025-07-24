import { useState } from "react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp"
import { CustomButton } from "../custom"
import { useNavigate } from "react-router-dom"
import { RiCornerUpLeftLine } from "@remixicon/react"


export default function VerifyForm() {

    const [value, setValue] = useState("")
    const navigate = useNavigate()

    return (
        <div className=" w-full flex gap-5 flex-col items-center " >
            <div className=" p-6 w-full gap-6 flex justify-center flex-col items-center " >
                <div className=" w-full flex justify-center " >
                    <img src="/images/logo.png" alt="logo" className=" w-[133px] " />
                </div>
                <div className=" w-full flex flex-col gap-2 text-center " >
                    <p className=" text-lg font-semibold " >Verify your email address</p>
                    <p className=" text-sm text-center " >We sent a 6 digit code to lisalarsen@peterson-madden.com</p>
                </div>
                <div className=" w-full flex flex-col gap-3 items-center " >
                    <InputOTP
                        maxLength={6}
                        value={value}
                        onChange={(value) => setValue(value)}
                        className=" gap-2 "
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                            <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                            <InputOTPSlot index={4} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                    <p className=" text-sm " >Resend code in <span className=" text-[#E35706]  " >00:59</span></p>
                    <CustomButton onClick={() => navigate("/onboarding")} className=" w-full mt-2 " >
                        Verify
                    </CustomButton>
                </div>

                <div onClick={() => navigate(-1)} className=" cursor-pointer w-full pb-4 flex justify-center items-center text-sm font-medium text-[#2B5DF3] gap-1 " >
                    <RiCornerUpLeftLine /> <p>Cancel</p>
                </div>
            </div>
        </div >
    )
}