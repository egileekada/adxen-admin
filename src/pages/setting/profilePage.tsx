import { CustomButton, CustomInput } from "@/components/custom";
import HeaderDescription from "@/components/shared/headerDecription";
import { useQuery } from "@/components/utils/useQuery";
import { RiCloseCircleFill, RiUser2Line } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {

    const query = useQuery();
    const navigate = useNavigate()
    const type = query.get('type');
    
    const changeHandler = (item: string, value: string) => {
        console.log(item + " " + value);
    }

    return (
        <div className=" w-full flex gap-6 " >
            <div className=" w-fit " >
                <div className=" w-[258px] rounded-md border p-[10px] border-border-default gap-2 flex flex-col " >
                    <p className=" uppercase text-xs text-muted " >select menu</p>
                    <div onClick={() => navigate("/dashboard/settings")} className={` cursor-pointer ${!type ? " bg-badge-blue text-blue-infomative " : ""} p-[6px] text-sm font-medium rounded-sm h-[32px] gap-[6px] flex items-center `} >
                        <RiUser2Line size={"18px"} />
                        <p>Personal information</p>
                    </div>
                    <div onClick={() => navigate("?type=business")} className={` cursor-pointer ${type === "business" ? " bg-badge-blue text-blue-infomative " : ""} p-[6px] text-sm font-medium rounded-sm h-[32px] gap-[6px] flex items-center `} >
                        <RiUser2Line size={"18px"} />
                        <p>Business information</p>
                    </div>
                    <div onClick={() => navigate("?type=kyc")} className={` cursor-pointer ${type === "kyc" ? " bg-badge-blue text-blue-infomative " : ""} p-[6px] text-sm font-medium rounded-sm h-[32px] gap-[6px] flex items-center `} >
                        <RiUser2Line size={"18px"} />
                        <p>KYC & Verification</p>
                    </div>
                </div>
            </div>
            <div className=" w-full " >
                {!type && (
                    <div className=" max-w-[352px] w-full flex flex-col gap-3 " >
                        <div className=" w-full pb-3 border-b " >
                            <HeaderDescription
                                title="Personal information"
                                description="Manage your bio data"
                                showActionButton={false}
                                showCopyButton={false}
                                subtitle={true}
                            />
                        </div>
                        <div className=" w-full flex flex-col gap-4 " >
                            <div className=" w-full flex gap-4 items-center " >
                                <div className=" rounded-full w-14 h-14 bg-amber-300 " />
                                <CustomButton variant={"outline"} className=" h-[28px] text-xs " >Upload</CustomButton>
                                <p className=" text-xs " >JPG, GIF or PNG. 1MB Max.</p>
                            </div>
                            <div className=" w-full flex flex-col gap-3 " >
                                <CustomInput placeholder="" label="First name" name={""} setValue={changeHandler} />
                                <CustomInput placeholder="" label="Last name" name={""} setValue={changeHandler} />
                                <CustomInput placeholder="" label="Phone number" name={""} setValue={changeHandler} />
                                <CustomInput placeholder="" label="Country" name={""} setValue={changeHandler} />
                            </div>
                            <div className=" w-full flex gap-3 " >
                                <CustomButton className=" w-[110px] " >
                                    <p>Save</p>
                                </CustomButton>
                                <CustomButton variant={"outline"} className=" w-[110px] " >
                                    <p>Cancel</p>
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                )}
                {type === "business" && (
                    <div className=" max-w-[352px] w-full flex flex-col gap-3 " >
                        <div className=" w-full pb-3 border-b " >
                            <HeaderDescription
                                title="Business information"
                                description="Manage your business data"
                                showActionButton={false}
                                showCopyButton={false}
                                subtitle={true}
                            />
                        </div>
                        <div className=" w-full flex flex-col gap-3 ">
                            <CustomInput placeholder="" label="Company name *" name={""} setValue={changeHandler} />
                            <CustomInput placeholder="" label="Company address *" name={""} setValue={changeHandler} />
                        </div>
                        <div className=" w-full flex gap-3 " >
                            <CustomButton className=" w-[110px] " >
                                <p>Save</p>
                            </CustomButton>
                            <CustomButton variant={"outline"} className=" w-[110px] " >
                                <p>Cancel</p>
                            </CustomButton>
                        </div>
                    </div>
                )}
                {type === "kyc" && (
                    <div className=" max-w-[352px] w-full flex flex-col gap-3 " >
                        <div className=" w-full pb-3 border-b " >
                            <HeaderDescription
                                title="KYC & Verification"
                                description="View or update your business verification details.a"
                                showActionButton={false}
                                showCopyButton={false}
                                subtitle={true}
                            />
                        </div>
                        <div className=" w-full flex flex-col gap-2 text-center items-center py-10 ">
                            <RiCloseCircleFill size={"20px"} color="red" />
                            <p className=" text-sm " >{`We couldn't verify your business details. Please review your information and try again.`}</p>
                            <CustomButton className=" w-[143px] " >
                                <p>Begin verification</p>
                            </CustomButton>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}