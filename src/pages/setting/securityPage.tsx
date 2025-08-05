import { CustomButton, CustomInput } from "@/components/custom";
import HeaderDescription from "@/components/shared/headerDecription";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { useQuery } from "@/components/utils/useQuery";
import { RiEyeFill, RiEyeOffFill, RiKey2Line, RiLock2Line } from "@remixicon/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SecurityPage() {

    const query = useQuery();
    const navigate = useNavigate()
    const type = query.get('type');

    const [hidePasswordOld, setHidePasswordOld] = useState("password")
    const [hidePasswordNew, setHidePasswordNew] = useState("password")
    const [hidePassword, setHidePassword] = useState("password")

    const changeHandler = (name: string, value: string) => {
        console.log(name);
        console.log(value);
    }

    return (
        <div className=" w-full flex gap-6 " >
            <div className=" w-fit " >
                <div className=" w-[258px] rounded-md border p-[10px] border-border-default gap-2 flex flex-col " >
                    <p className=" uppercase text-xs text-muted " >select menu</p>
                    <div onClick={() => navigate("/dashboard/settings/security")} className={` cursor-pointer ${!type ? " bg-badge-blue text-blue-infomative " : ""} p-[6px] text-sm font-medium rounded-sm h-[32px] gap-[6px] flex items-center `} >
                        <RiLock2Line size={"18px"} />
                        <p>Change password</p>
                    </div>
                    <div onClick={() => navigate("?type=2fa")} className={` cursor-pointer ${type === "2fa" ? " bg-badge-blue text-blue-infomative " : ""} p-[6px] text-sm font-medium rounded-sm h-[32px] gap-[6px] flex items-center `} >
                        <RiKey2Line size={"18px"} />
                        <p>2FA</p>
                    </div>
                </div>
            </div>
            <div className=" w-full " >
                {!type && (
                    <div className=" max-w-[352px] w-full flex flex-col gap-3 " >
                        <div className=" w-full pb-3 border-b " >
                            <HeaderDescription
                                title="Change password"
                                description="Update password for enhanced account security."
                                showActionButton={false}
                                showCopyButton={false}
                                subtitle={true}
                            />
                        </div>
                        <div className=" w-full flex flex-col gap-4 " >
                            <div className=" w-full flex flex-col gap-3 " >
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
                                        <div onClick={() => setHidePasswordNew((prev) => prev === "password" ? "text" : "password")} className=" cursor-pointer " >
                                            {hidePassword === "password" ?
                                                <RiEyeFill size={"16px"} color="#A1A1A9" /> :
                                                <RiEyeOffFill size={"16px"} color="#A1A1A9" />
                                            }
                                        </div>
                                    }
                                    hasBackIcon={true}
                                    type={hidePasswordNew}
                                    placeholder="Enter password" label="New Password" name={""} setValue={changeHandler} />
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
                            </div>
                            <div className=" w-full flex gap-3 " >
                                <CustomButton className=" w-[110px] " >
                                    <p>Update</p>
                                </CustomButton>
                                <CustomButton variant={"outline"} className=" w-[110px] " >
                                    <p>Cancel</p>
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                )}
                {type === "2fa" && (
                    <div className=" max-w-[352px] w-full flex flex-col gap-3 " >
                        <div className=" w-full pb-3 border-b " >
                            <HeaderDescription
                                title="Setup 2FA"
                                description="Add an extra layer of protection to your Adxens account."
                                showActionButton={false}
                                showCopyButton={false}
                                subtitle={true}
                            />
                        </div>
                        <div className=" w-full flex flex-col gap-3 " >
                            <RadioGroup defaultValue="SMS">
                                <div className=" p-4 rounded-[12px] border-border-default border w-full flex gap-3 " >
                                    <div className=" w-10 h-10 border rounded-full flex justify-center items-center " >

                                    </div>
                                    <div className=" flex-1 flex flex-col gap-1 " >
                                        <p className=" text-sm font-medium " >SMS Code</p>
                                        <p className=" text-xs text-muted " >Receive a one-time verification code via SMS to enter during login.</p>
                                    </div>
                                    <RadioGroupItem value="first" className=" mt-[2px] " id="r1" />
                                </div>
                                <div className=" p-4 rounded-[12px] border-border-default border w-full flex gap-3 " >
                                    <div className=" w-10 h-10 border rounded-full flex justify-center items-center " >

                                    </div>
                                    <div className=" flex-1 flex flex-col gap-1 " >
                                        <p className=" text-sm font-medium " >Email Code</p>
                                        <p className=" text-xs text-muted " >Get a temporary verification code sent to your email for added security.</p>
                                    </div>
                                    <RadioGroupItem value="second" className=" mt-[2px] " id="r1" />
                                </div>
                                <div className=" p-4 rounded-[12px] border-border-default border w-full flex gap-3 " >
                                    <div className=" w-10 h-10 border rounded-full flex justify-center items-center " >

                                    </div>
                                    <div className=" flex-1 flex flex-col gap-1 " >
                                        <p className=" text-sm font-medium " >Authenticator App</p>
                                        <p className=" text-xs text-muted " >Use an authenticator app to generate time-based verification codes for login.</p>
                                    </div>
                                    <RadioGroupItem value="third" className=" mt-[2px] " id="r1" />
                                </div>
                            </RadioGroup>
                        </div>
                        <div className=" w-full flex gap-3 " >
                            <CustomButton className=" w-[110px] " >
                                <p>Update</p>
                            </CustomButton>
                            <CustomButton variant={"outline"} className=" w-[110px] " >
                                <p>Cancel</p>
                            </CustomButton>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}