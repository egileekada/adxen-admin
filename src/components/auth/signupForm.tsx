import { RiMailLine, RiKeyFill, RiAppleFill, RiGoogleFill, RiTwitterXFill, RiEyeFill, RiEyeOffFill, RiCornerUpLeftLine } from "@remixicon/react";
import { CustomButton, CustomInput } from "../custom";
import AuthFooter from "./authFooter";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SignupForm() {

    const { search } = useLocation();
    const navigate = useNavigate()
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
                <p className=" text-lg font-semibold " >Create your free Adxens account</p>

                {!search && (
                    <div className=" w-full gap-6 flex justify-center flex-col items-center " >
                        <div className=" w-full flex gap-3 flex-col " >
                            <CustomButton onClick={() => navigate("?form=true")} variant={"default"} className=" bg-[#111115] gap-1 w-full " >
                                <RiMailLine size={"15px"} />Continue with email
                            </CustomButton>
                            <CustomButton variant={"outline"} className=" gap-1 w-full " >
                                <RiKeyFill size={"15px"} className=" -rotate-45 " />Continue with SSO
                            </CustomButton>
                        </div>
                        <div className=" flex justify-center " >
                            <p>or</p>
                        </div>
                        <div className=" w-full flex gap-3 items-center " >
                            <CustomButton variant={"outline"} className=" h-[50px] flex-1/2 " >
                                <RiAppleFill size={"40px"} />
                            </CustomButton>
                            <CustomButton variant={"outline"} className=" h-[50px] flex-1/2 " >
                                <RiGoogleFill size={"40px"} />
                            </CustomButton>
                            <CustomButton variant={"outline"} className=" h-[50px] flex-1/2 " >
                                <RiTwitterXFill size={"40px"} />
                            </CustomButton>
                        </div>
                    </div>
                )}

                {search && (
                    <form className=" flex w-full flex-col gap-4 " >
                        <CustomInput placeholder="mail@domain.com" label="Email" name={""} setValue={changeHandler} />
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
                            placeholder="Enter password" label="Password" name={""} setValue={changeHandler} />
                        <CustomButton onClick={()=> navigate("/auth/verify")} className=" mt-2 w-full " >
                            Create account
                        </CustomButton>
                        <div onClick={() => navigate(-1)} className=" cursor-pointer w-full py-4 flex justify-center items-center text-sm font-medium text-[#2B5DF3] gap-1 " >
                            <RiCornerUpLeftLine /> <p>Back to sign up options</p>
                        </div>
                    </form>
                )}
                <p className=" text-sm text-center " >By signing up, you agree to our <span className=" font-medium " >Terms of Service</span> and <span className=" font-medium " >Privacy Policy</span></p>
            </div>
            {!search && (
                <AuthFooter link="/" linktext="Sign in" text="Already have an account?" />
            )}
        </div>
    )
}