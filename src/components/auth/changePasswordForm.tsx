import { CustomButton, CustomInput } from "../custom" 
import { RiCornerUpLeftLine, RiEyeFill, RiEyeOffFill } from "@remixicon/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ChangePasswordForm() {

    const navigate = useNavigate() 

    const [hidePasswordOld, setHidePasswordOld] = useState("password")
    const [hidePassword, setHidePassword] = useState("password")

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
                <div className=" w-full flex flex-col gap-2 text-center " >
                    <p className=" text-lg font-semibold " >Set a New Password</p> 
                </div>
                <div className=" w-full flex flex-col gap-3 items-center " >
                    <div className=" w-full flex flex-col gap-3 items-center " >

                        <CustomInput
                            iconback={
                                <div onClick={() => setHidePasswordOld((prev) => prev === "password" ? "text" : "password")} className=" cursor-pointer " >
                                    {hidePasswordOld === "password" ?
                                        <RiEyeFill size={"16px"} color="#A1A1A9" /> :
                                        <RiEyeOffFill size={"16px"} color="#A1A1A9" />
                                    }
                                </div>
                            }
                            hasBackIcon={true}
                            type={hidePasswordOld}
                            placeholder="Enter password" label="Password" name={""} setValue={changeHandler} />

                        <CustomInput
                            iconback={
                                <div onClick={() => setHidePassword((prev) => prev === "password" ? "text" : "password")} className=" cursor-pointer " >
                                    {hidePassword === "password" ?
                                        <RiEyeFill size={"16px"} color="#A1A1A9" /> :
                                        <RiEyeOffFill size={"16px"} color="#A1A1A9" />
                                    }
                                </div>
                            }
                            hasBackIcon={true}
                            type={hidePassword}
                            placeholder="Enter password" label="Confirm Password" name={""} setValue={changeHandler} />
                        <CustomButton onClick={() => navigate("/auth/reset?succes=true")} className=" w-full mt-2 " >
                            Update password
                        </CustomButton>
                    </div>
                </div>
                <div onClick={() => navigate("/")} className=" cursor-pointer w-full pb-4 flex justify-center items-center text-sm font-medium text-[#2B5DF3] gap-1 " >
                    <RiCornerUpLeftLine /> <p>Cancel</p>
                </div>
            </div>
        </div >
    )
}