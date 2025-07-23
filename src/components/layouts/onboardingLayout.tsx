import { Outlet } from "react-router-dom"

export default function OnboardingLayout() {

    return (
        <div className={` w-full h-screen flex lg:flex-row flex-col `} >
            <img alt="auth" src="/images/auth.png" className=" absolute left-0 inset-y-0 h-screen " />
            <div className=" w-[286px] h-full hidden lg:flex flex-col justify-center gap-6 items-center " >
                <img src="/images/logo.png" alt="logo" className=" w-[100px] absolute top-6 left-4 " />
                <div className=" w-full flex flex-col " >
                    <p>Account Setup</p>
                </div>
            </div>
            <div className=" w-full h-full lg:pb-0 pb-10 flex justify-center items-center " >
                <Outlet />
            </div>
        </div>
    )
}