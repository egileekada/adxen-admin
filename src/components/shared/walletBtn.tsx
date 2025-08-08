import { CustomButton } from "../custom";

export default function WalletBtn() {
    return ( 
        <div className=" flex w-full lg:flex-row flex-col gap-6 " >
            <div className=" w-full p-5 bg-[#F4F4F5] flex items-center gap-2 rounded-[8px]  " >
                <div className=" flex flex-1 flex-col gap-1 " >
                    <p className=" font-semibold " >Make a deposit</p>
                    <p className=" text-xs " >Fund your wallet using a preferred payment method and start allocating ad budgets</p>
                    <CustomButton className=" bg-white text-default w-[128px] mt-4 " >
                        Top-up balance
                    </CustomButton>
                </div>
                {/* <div className=" w-[50px] h-[50px] bg-amber-200 " /> */}
                <img src="/images/dollar.png" alt="dollar" />
            </div>
            <div className=" w-full p-5 bg-[#F4F4F5] flex items-center gap-2 rounded-[8px]  " >
                <div className=" flex flex-1 flex-col gap-1 " >
                    <p className=" font-semibold " >Withdraw Funds</p>
                    <p className=" text-xs " >Open a new Meta, Google, or TikTok ad account in minutes.</p>
                    <CustomButton className=" bg-white text-default w-[128px] mt-4 " >
                        Request Payout
                    </CustomButton>
                </div>
                <img src="/images/speaker.png" alt="speaker" />
            </div>
            <div className=" w-full p-5 bg-[#F4F4F5] flex items-center gap-2 rounded-[8px]  " >
                <div className=" flex flex-1 flex-col gap-1 " >
                    <p className=" font-semibold " >Internal Transfer</p>
                    <p className=" text-xs " >Instantly move funds between your own ad accounts.</p>
                    <CustomButton className=" bg-white text-default w-[128px] mt-4 " >
                        Make transfer
                    </CustomButton>
                </div>
                <img src="/images/link.png" alt="link" />
            </div>
        </div>
    )
}