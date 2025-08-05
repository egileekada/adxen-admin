import { CustomButton } from "@/components/custom";
import HeaderDescription from "@/components/shared/headerDecription";
import { Switch } from "@/components/ui/switch";

export default function NotificationPage() {
    return (
        <div className=" max-w-[500px] w-full flex gap-4 flex-col " >
            <div className=" w-full pb-3 border-b " >
                <HeaderDescription
                    title="Notification Channels"
                    description="toggle what types of events they want to be notified about"
                    showActionButton={false}
                    showCopyButton={false}
                    subtitle={true}
                />
            </div>
            <div className=" w-full flex flex-col gap-3 pt-3 " >
                <div className=" w-full flex gap-3 pb-3 border-b " >
                    <Switch className=" mt-[2px] " />
                    <div className=" flex flex-col gap-1 " >
                        <p className=" text-sm font-medium " >Wallet activity alerts</p>
                        <p className=" text-sm text-subtle " >Get notified for deposits, top-ups, and withdrawals.</p>
                    </div>
                </div>
                <div className=" w-full flex gap-3 pb-3 border-b " >
                    <Switch className=" mt-[2px] " />
                    <div className=" flex flex-col gap-1 " >
                        <p className=" text-sm font-medium " >Ad account request updates</p>
                        <p className=" text-sm text-subtle " >Know when your requests are approved, rejected, or need edits.</p>
                    </div>
                </div>
                <div className=" w-full flex gap-3 pb-3 border-b " >
                    <Switch className=" mt-[2px] " />
                    <div className=" flex flex-col gap-1 " >
                        <p className=" text-sm font-medium " >Invoice & billing emails</p>
                        <p className=" text-sm text-subtle " >Receive receipts and billing confirmations.</p>
                    </div>
                </div>
                <div className=" w-full flex gap-3 pb-3 border-b " >
                    <Switch className=" mt-[2px] " />
                    <div className=" flex flex-col gap-1 " >
                        <p className=" text-sm font-medium " >Security alerts</p>
                        <p className=" text-sm text-subtle " >Get notified about logins, password changes, and 2FA events.</p>
                    </div>
                </div>
                <div className=" w-full flex gap-3 pb-3 border-b " >
                    <Switch className=" mt-[2px] " />
                    <div className=" flex flex-col gap-1 " >
                        <p className=" text-sm font-medium " >Promotional campaign emails</p>
                        <p className=" text-sm text-subtle " >Occasional offers and product tips.</p>
                    </div>
                </div>
            </div>

            <div className=" w-full flex gap-3 mt-2 " >
                <CustomButton className=" w-[110px] " >
                    <p>Update</p>
                </CustomButton>
                <CustomButton variant={"outline"} className=" w-[110px] " >
                    <p>Cancel</p>
                </CustomButton>
            </div>
        </div>
    )
}