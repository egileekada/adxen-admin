import { CustomButton, CustomInput } from "../custom";
import { RiAppleFill, RiCornerUpLeftLine, RiEyeFill, RiEyeOffFill, RiGoogleFill, RiKeyFill, RiMailLine, RiTwitterXFill } from '@remixicon/react'
import AuthFooter from "./authFooter";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";

export default function SigninForm() {

    const { search } = useLocation();
    const navigate = useNavigate()
    const [hidePassword, setHidePassword] = useState("password")

    const { formik, signInPending } = useAuth()
    
    const loginHandler = (e: any) => {
        e.preventDefault()
        formik?.handleSubmit()
    }

    return (
        <div className=" w-full flex flex-col items-center " >
            <div className=" p-6 w-full gap-6 flex justify-center flex-col items-center " >
                <div className=" w-full flex justify-center " >
                    <img src="/images/logo.png" alt="logo" className=" w-[133px] " />
                </div>
                <p className=" text-lg font-semibold " >Welcome Back to Adxens</p>
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
                    <form onSubmit={loginHandler} className=" flex w-full flex-col gap-4 " >
                        <CustomInput placeholder="mail@domain.com" label="Email" value={formik?.values} name={"email"} setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched} />
                        <CustomInput
                            labelbtn={
                                <div onClick={() => navigate("/auth/reset")} className=" text-sm text-[#2B5DF3] cursor-pointer " >
                                    <p>Reset password</p>
                                </div>
                            }
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
                            placeholder="Enter password" label="Password" value={formik?.values} name="password" setValue={formik?.setFieldValue} errors={formik?.errors} touched={formik?.touched}  />
                        <CustomButton onClick={loginHandler} type="submit" isLoading={signInPending} className=" mt-2 w-full " >
                            Sign in
                        </CustomButton>

                    </form>
                )}
            </div>
            {search ?
                <div onClick={() => navigate(-1)} className=" cursor-pointer w-full mb-8 flex justify-center items-center text-sm font-medium text-[#2B5DF3] gap-1 " >
                    <RiCornerUpLeftLine /> <p>Back to sign in options</p>
                </div> :
                <AuthFooter link="/auth/signup" linktext="Create account" text="New to Adxens AI?" />
            }
        </div>
    )
}