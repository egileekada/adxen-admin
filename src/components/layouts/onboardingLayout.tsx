import { RiCheckboxCircleFill, RiLoader2Line } from "@remixicon/react"
import { Outlet } from "react-router-dom"
import { useQuery } from "../utils/useQuery";

export default function OnboardingLayout() {

    const query = useQuery();
    const type = query.get('type'); 

    return (
        <div className={` w-full h-screen flex lg:flex-row flex-col `} >
            <img alt="auth" src="/images/auth.png" className=" lg:absolute lg:left-0 lg:inset-y-0 lg:h-screen " />
            <div className=" w-[286px] h-full hidden lg:flex flex-col justify-center gap-6 items-center " >
                <img src="/images/logo.png" alt="logo" className=" w-[100px] absolute top-6 left-4 " />
                <div className="  w-full flex flex-col justify-center items-center " >
                    <div className=" max-w-[187px] flex flex-col gap-8 " >
                        <p>Account Setup</p>
                        <div className=" w-full flex flex-col gap-6 " >
                            <div className={` flex text-sm gap-4 ${!type ? "text-blue-infomative" : " text-subtle "} `} >
                                {!type ? (
                                    <RiLoader2Line size={"20px"} />
                                ) : (
                                    <RiCheckboxCircleFill className=" text-success " size={"20px"} />
                                )}
                                <p>Personal Info</p>
                            </div>
                            <div className={` flex text-sm gap-4 ${type === "account" ? "text-blue-infomative" : " text-subtle "} `} >
                                {type === "account" ?
                                    <RiLoader2Line size={"20px"} /> :
                                    type !== "account" ? (
                                        <RiCheckboxCircleFill className=" text-success " size={"20px"} />
                                    ) : (
                                        <div className=" font-semibold border-border-darker text-xs flex justify-center items-center w-6 h-6 rounded-full shadow-md bg-white relative z-10 " >
                                            2
                                        </div>
                                    )
                                }
                                <p>Account Type</p>
                            </div>
                            <div className={` flex text-sm gap-4 ${type === "ads" ? "text-blue-infomative" : " text-subtle "} `} >
                                {type === "ads" ?
                                    <RiLoader2Line size={"20px"} /> :
                                    type !== "ads" ? (
                                        <RiCheckboxCircleFill className=" text-success " size={"20px"} />
                                    ) :
                                        <div className=" font-semibold border-border-darker text-xs flex justify-center items-center w-6 h-6 rounded-full shadow-md bg-white relative z-10 " >
                                            3
                                        </div>
                                }
                                <p>Advertising Info</p>
                            </div>
                            <div className={` flex text-sm gap-4 ${type === "plan" ? "text-blue-infomative" : " text-subtle "} `} >
                                {type === "plan" ?
                                    <RiLoader2Line size={"20px"} /> :
                                    type !== "plan" ? (
                                        <RiCheckboxCircleFill className=" text-success " size={"20px"} />
                                    ) :
                                        <div className=" font-semibold border-border-darker text-xs flex justify-center items-center w-6 h-6 rounded-full shadow-md bg-white relative z-10 " >
                                            4
                                        </div>
                                }
                                <p>Choose a Plan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full lg:h-full lg:pb-0 pb-10 px-4 flex lg:justify-center lg:items-center " >
                <Outlet />
            </div>
        </div>
    )
}