
import { CustomButton, CustomInput } from "@/components/custom";
import { DrawerLayout, SheetLayout } from "@/components/shared";
import { useIsMobile } from "@/hooks/use-mobile";
import { useModal } from "@/hooks/use-modal";


export default function AddCrypto() {
    const { isOpen, closeModal } = useModal();
    const isMobile = useIsMobile();

    const changeHandler = (item: string, value: string) => {
        console.log(item + " " + value);
    }

    const CryptoForm = () => {
        return (
            <div>

                <div className=" w-full flex flex-col gap-3 px-5 pb-5 " >
                    <div className=" py-[10px] px-3 rounded-md bg-[#DEEAFD] " >
                        <div className=" flex gap-2 items-center " >
                            <div className=" w-1 rounded-full h-8 bg-[#437DFC] " />
                            <p className=" text-sm text-subtle " >{`Make sure you enter a USDT Trc20 wallet address in order not to risk loosing your funds`}</p>
                        </div>
                    </div>
                    <CustomInput placeholder="" label="USDT  wallet address  (Trc 20)" name={""} setValue={changeHandler} /> 
                </div>

                <div className="flex justify-between items-center px-6 py-4 border-t border-border-darker">
                    <CustomButton variant="outline" >
                        Cancel
                    </CustomButton>
                    <CustomButton type="submit">
                        Save
                    </CustomButton>
                </div>
            </div>
        )
    }

    if (isMobile)
        return (
            <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Payout method"]} header="Add Wallet" >
                <CryptoForm />
            </DrawerLayout>
        );

    return (
        <SheetLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Payout method"]} header="Add Wallet" >
            <CryptoForm />
        </SheetLayout>
    );
}; 