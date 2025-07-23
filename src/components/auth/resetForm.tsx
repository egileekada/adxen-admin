import { CustomButton, CustomInput } from "../custom"
import { useLocation, useNavigate } from "react-router-dom"
import { RiCornerUpLeftLine, RiMailLine } from "@remixicon/react"


export default function ResetForm() {

    const navigate = useNavigate()
    const { search } = useLocation();

    const changeHandler = (name: string, value: string) => {
        console.log(name);
        console.log(value); 
    }

    return (
        <div className=" w-full flex gap-5 flex-col items-center " >
            <div className=" p-6 w-full gap-6 flex justify-center flex-col items-center " >
                <div className=" w-full flex justify-center " >
                    <img src="/images/logo.png" alt="logo" className=" w-[133px] " />
                </div>
                {!search && (
                    <div className=" w-full flex flex-col gap-2 text-center " >
                        <p className=" text-lg font-semibold " >Reset your password</p>
                        <p className=" text-sm text-center " >Enter your email address and we'll send you a link to reset your password.</p>
                    </div>
                )}
                {!search && (
                    <div className=" w-full flex flex-col gap-3 items-center " >
                        <div className=" w-full flex flex-col gap-3 items-center " >
                            <CustomInput placeholder="mail@domain.com" label="Email" name={""} setValue={changeHandler} />
                            <CustomButton onClick={() => navigate("/auth/reset?succes=true")} className=" w-full mt-2 " >
                                Reset password
                            </CustomButton>
                        </div>
                    </div>
                )}
                {search && (
                    <div className=" w-full flex flex-col items-center pt-8 gap-3 " >
                        <img src="/images/success.png" alt="success" />
                        <p className=" text-sm text-[#4E4E55] " >We sent a password reset link to your email</p>
                        <CustomButton variant={"outline"} className=" w-full rounded-full " >
                            <RiMailLine color="#A1A1A9" /> Open inbox
                        </CustomButton>
                    </div>
                )}

                <div onClick={() => navigate("/")} className=" cursor-pointer w-full pb-4 flex justify-center items-center text-sm font-medium text-[#2B5DF3] gap-1 " >
                    <RiCornerUpLeftLine /> <p>Back to sign in</p>
                </div>
            </div>
        </div >
    )
}