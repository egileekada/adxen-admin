
import { CustomButton, CustomInput } from "@/components/custom";
import { DrawerLayout, SheetLayout } from "@/components/shared";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useIsMobile } from "@/hooks/use-mobile";
import { useModal } from "@/hooks/use-modal";


export default function WalletModal() {
    const { isOpen, closeModal } = useModal();
    const isMobile = useIsMobile();

    const changeHandler = (item: string, value: string) => {
        console.log(item + " " + value);
    }

    const WalletForm = () => {
        return (
            <div>

                <div className=" w-full flex flex-col gap-3 px-5 pb-5 " >
                    <div className=" w-full flex flex-col gap-1 " >
                        <CustomInput placeholder="" label="How much do you want top-up?" name={""} setValue={changeHandler} />
                    </div>
                    <div className=" w-full flex flex-col gap-3 " >
                        <p className=" text-sm font-medium " >Payment method</p>
                        <RadioGroup defaultValue="card">
                            <div className=" p-4 rounded-[12px] border-border-default border w-full flex gap-3 " >
                                <div className=" flex-1 flex flex-col gap-1 " >
                                    <div className=" w-6 h-6 border rounded-full bg-indigo-300 flex justify-center items-center " >

                                    </div>
                                    <p className=" text-sm font-medium " >Card</p>
                                    <p className=" text-xs text-muted " >Global payment</p>
                                </div>
                                <RadioGroupItem value="card" className=" mt-[2px] " id="r1" />
                            </div>
                            <div className=" p-4 rounded-[12px] border-border-default border w-full flex gap-3 " >
                                <div className=" flex-1 flex flex-col gap-1 " >
                                    <div className=" w-6 h-6 border rounded-full bg-indigo-300 flex justify-center items-center " >

                                    </div>
                                    <p className=" text-sm font-medium " >Mobile money</p>
                                    <p className=" text-xs text-muted " >NGN, KES, GHS, TZS, UGX, XOF</p>
                                </div>
                                <RadioGroupItem value="mobile" className=" mt-[2px] " id="r1" />
                            </div>
                            <div className=" p-4 rounded-[12px] border-border-default border w-full flex gap-3 " >
                                <div className=" flex-1 flex flex-col gap-1 " >
                                    <div className=" w-6 h-6 border rounded-full bg-indigo-300 flex justify-center items-center " >

                                    </div>
                                    <p className=" text-sm font-medium " >Crypto</p>
                                    <p className=" text-xs text-muted " >USDT, ETH, BTC</p>
                                </div>
                                <RadioGroupItem value="crypto" className=" mt-[2px] " id="r1" />
                            </div>
                            <div className=" p-4 rounded-[12px] border-border-default border w-full flex gap-3 " >
                                <div className=" flex-1 flex flex-col gap-1 " >
                                    <div className=" w-6 h-6 border rounded-full bg-indigo-300 flex justify-center items-center " >

                                    </div>
                                    <p className=" text-sm font-medium " >Bank account</p>
                                    <p className=" text-xs text-muted " >USD, EUR. Requires manual confirmation. can take up to 5 days to reflect</p>
                                </div>
                                <RadioGroupItem value="bank" className=" mt-[2px] " id="r1" />
                            </div>
                        </RadioGroup>
                    </div>
                </div>

                <div className="flex justify-between items-center px-6 py-4 border-t border-border-darker">
                    <CustomButton variant="outline" >
                        Cancel
                    </CustomButton>
                    <CustomButton type="submit">
                        Proceed
                    </CustomButton>
                </div>
            </div>
        )
    }

    if (isMobile)
        return (
            <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Home", "Fund Wallet"]} header="Add Funds to Your Wallet" >
                <WalletForm />
            </DrawerLayout>
        );

    return (
        <SheetLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Home", "Fund Wallet"]} header="Add Funds to Your Wallet" >
            <WalletForm />
        </SheetLayout>
    );
}; 