
import { CustomButton, CustomInput } from "@/components/custom";
import { DrawerLayout, SheetLayout } from "@/components/shared";
import { useIsMobile } from "@/hooks/use-mobile";
import { useModal } from "@/hooks/use-modal";


export default function WalletWithdrawal() {
    const { isOpen, closeModal, openModal } = useModal();
    const isMobile = useIsMobile();

    const changeHandler = (item: string, value: string) => {
        console.log(item + " " + value);
    }

    const clickHandler = () => {
        // closeModal()
        openModal("withdraw-success")
    }

    const WithdrawalForm = () => {
        return (
            <div>

                <div className=" w-full flex flex-col gap-4 px-5 pb-5 " >
                    <CustomInput placeholder="" label="Select bank account" name={""} setValue={changeHandler} />
                    <div className=" w-full flex flex-col gap-1 " >
                        <CustomInput placeholder="" label="Withdrawal amount" name={""} setValue={changeHandler} />
                        <p className=" text-sm " >Wallet balance: <span className=" text-blue-infomative " >$24,609.55</span></p>
                    </div> 
                    <div className=" w-full flex flex-col gap-2 border-t border-b py-4 " >
                        <div className=" w-full flex justify-between items-center " >
                            <p className=" text-sm text-subtle " >Commission Fee (4.99%): </p>
                            <p className=" text-default " >₦2,500</p>
                        </div>
                        <div className=" w-full flex justify-between items-center " >
                            <p className=" text-sm text-subtle " >Amount to convert :</p>
                            <p className=" text-default " >₦47,500</p>
                        </div>
                        <div className=" w-full flex justify-between items-center " >
                            <p className=" text-sm text-blue-infomative underline " >Exchange rate: </p>
                            <p className=" text-default " >1,450</p>
                        </div>
                    </div>
                    <CustomInput placeholder="" label="You will receive" name={""} setValue={changeHandler} />
                </div>

                <div className="flex justify-between items-center px-6 py-4 border-t border-border-darker">
                    <CustomButton variant="outline" >
                        Cancel
                    </CustomButton>
                    <CustomButton onClick={clickHandler} type="submit">
                        Proceed
                    </CustomButton>
                </div>
            </div>
        )
    }

    if (isMobile)
        return (
            <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Ad budget", "Request payout"]} header="Withdraw balance" >
                <WithdrawalForm />
            </DrawerLayout>
        );

    return (
        <SheetLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Ad budget", "Request payout"]} header="Withdraw balance" >
            <WithdrawalForm />
        </SheetLayout>
    );
}; 