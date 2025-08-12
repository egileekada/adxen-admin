import { CustomButton } from "@/components/custom";
import { useModal } from "@/hooks/use-modal";

export default function PayoutPage() {



    const { openModal } = useModal();


    return (
        <div className=" w-full flex gap-4 flex-wrap " >
            <div className=" w-full md:w-[224px] rounded-xl border p-6 flex flex-col gap-3 border-border-default " >
                <div className=" w-[40px] h-[40px] rounded-full bg-soft " >

                </div>
                <div className=" flex flex-col " >
                    <p className=" text-sm font-medium " >Bank Transfer </p>
                    <p className=" text-sm " >Local or International</p>
                </div>
                <CustomButton onClick={() => openModal("addbankdetail")} className=" w-full mt-auto " >
                    <p>Add Bank</p>
                </CustomButton>
            </div>
            <div className=" w-full md:w-[224px] rounded-xl border p-6 flex flex-col gap-3 border-border-default " >
                <div className=" w-[40px] h-[40px] rounded-full bg-soft " >

                </div>
                <div className=" flex flex-col " >
                    <p className=" text-sm font-medium " >Crypto Wallet</p>
                    <p className=" text-sm " >USDT Trc20</p>
                </div>

                <CustomButton onClick={() => openModal("crypto")} className=" w-full mt-auto " >
                    <p>Add Wallet</p>
                </CustomButton>
            </div>
            <div className=" w-full md:w-[224px] rounded-xl border p-6 flex flex-col gap-3 border-border-default " >
                <div className=" w-[40px] h-[40px] rounded-full bg-soft " >

                </div>
                <div className=" flex flex-col " >
                    <p className=" text-sm font-medium " >Wise</p>
                    <p className=" text-sm " >Email-based payout</p>
                </div>

                <CustomButton onClick={() => openModal("payoneer")} className=" w-full mt-auto " >
                    <p>Connect Wise</p>
                </CustomButton>
            </div>
            <div className=" w-full md:w-[224px] rounded-xl border p-6 flex flex-col gap-3 border-border-default " >
                <div className=" w-[40px] h-[40px] rounded-full bg-soft " >

                </div>
                <div className=" flex flex-col " >
                    <p className=" text-sm font-medium " >Payoneer</p>
                    <p className=" text-sm " >Payoneer ID or email</p>
                </div>

                <CustomButton onClick={() => openModal("wise-account")} className=" w-full mt-auto " >
                    <p>Add Bank</p>
                </CustomButton>
            </div>
        </div>
    )
}