import { RiCornerUpLeftLine } from "@remixicon/react"
import { Outlet, useNavigate } from "react-router-dom"

export default function AuthLayout(
    {
        children,
        home
    }: {
        home?: boolean
        children?: React.ReactNode
    }
) {

    const navigate = useNavigate() 

    return (
        <div className={` w-full h-screen flex lg:flex-row flex-col lg:px-0 px-4  lg:py-0 py-6 gap-14 `} >
            <img alt="auth" src="/images/auth.png" className=" absolute left-0 inset-y-0 h-screen " />
            <div className=" w-full h-full flex lg:flex-row flex-col justify-center gap-6 items-center " >
                {!home && (
                    <div onClick={()=> navigate(-1)} className=" lg:hidden mr-auto relative z-10 cursor-pointer flex gap-1 items-center " >
                        <RiCornerUpLeftLine /> <p className=" text-sm font-medium " >Go back</p>
                    </div>
                )}
                <div className={` max-w-[400px] flex-col gap-6 border rounded-2xl shadow-md relative z-10 w-full bg-white max-h-[530px] flex items-center `} >
                    {children}
                    <Outlet />
                </div>
            </div>
            <div className=" w-full h-full lg:pb-0 pb-10 flex justify-center items-center " >
                <div className=" w-full relative flex justify-center items-center flex-col h-full max-h-[530px] " >
                    {!home && (
                        <div onClick={()=> navigate(-1)} className=" absolute lg:flex hidden top-0 right-10 cursor-pointer gap-1 items-center " >
                            <RiCornerUpLeftLine /> <p className=" text-sm font-medium " >Go back</p>
                        </div>
                    )}
                    <div className=" max-w-[517px] flex flex-col-reverse lg:flex-col gap-4 " >
                        <p className="  " >“We were looking for a partner who could adapt to our requirements in terms of fluidity in our processes, it was important that accounts were available on time and that recharge orders were processed on time to ensure consistent performance over time. It's definitely the fastest service on the market with a lot of proactivity from their support and professionalism.”</p>
                        <div className=" flex gap-3 items-center " >
                            <div className=" w-10 h-10 rounded-full bg-blue-300 "  >

                            </div>
                            <div className=" flex flex-col " >
                                <p className=" font-medium " >Karim Bouchraoui</p>
                                <p className=" text-sm " >Shop-med</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}