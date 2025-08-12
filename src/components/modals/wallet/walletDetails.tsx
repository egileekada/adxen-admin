 
import { DrawerLayout, SheetLayout } from "@/components/shared";
import { useIsMobile } from "@/hooks/use-mobile";
import { useModal } from "@/hooks/use-modal";
import { RiContactsLine } from "react-icons/ri";


export default function WithdrawalDetail() {
    const { isOpen, closeModal } = useModal();
    const isMobile = useIsMobile();

    const WithdrawalDetailCard = () => {
        return (
            <div>

                <div className=" w-full flex flex-col gap-4 px-5 pb-5 " > 
                    <div className=" w-full flex justify-between border-b items-center " >
                        <p className=" text-xl font-semibold " >Summary</p>
                    </div>
                    <div className=" w-full flex flex-col gap-3 " >
                        <div className=" flex flex-col gap-1 " >
                            <p className=" font-medium text-sm " >Initiated by</p>
                            <div className=" flex items-center gap-2 " >
                                <RiContactsLine />
                                <p>Ryan Parker</p>
                            </div>
                            <p className=" text-sm text-muted " >holttammy@yahoo.com</p>
                        </div>
                        <div className=" flex flex-col gap-1 " >
                            <p className=" font-medium text-sm " >Transaction type</p> 
                            <p className=" text-sm text-muted " >Wallet Top-Up</p>
                        </div>
                        <div className=" flex flex-col gap-1 " >
                            <p className=" font-medium text-sm " >Status</p> 
                            <p className=" text-sm text-muted " >Completed</p>
                        </div>
                        <div className=" flex flex-col gap-1 " >
                            <p className=" font-medium text-sm " >Invoice number</p> 
                            <p className=" text-sm text-muted " >FF3F981-0098</p>
                        </div>
                        <div className=" flex flex-col gap-1 " >
                            <p className=" font-medium text-sm " >Currency</p> 
                            <p className=" text-sm text-muted " >USD - US Dollar</p>
                        </div>
                        <div className=" flex flex-col gap-1 " >
                            <p className=" font-medium text-sm " >Payment method</p> 
                            <p className=" text-sm text-muted " >Card (•••• 3456)</p>
                        </div>
                        <div className=" flex flex-col gap-1 " >
                            <p className=" font-medium text-sm " >Reference</p> 
                            <p className=" text-sm text-muted " >60348097</p>
                        </div>
                        <div className=" w-full flex mt-5 text-sm justify-between " >
                            <p>Subtotal</p>
                            <p>$500.00</p>
                        </div>
                        <div className=" w-full flex text-sm pb-2 border-b justify-between " >
                            <p>Platform Feez</p>
                            <p>-$25.00</p>
                        </div>
                        <div className=" w-full text-sm font-semibold flex pb-2 justify-between " >
                            <p>Total</p>
                            <p>$475.00</p>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }

    if (isMobile)
        return (
            <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Wallet", "Transactions", "FF3F981-0098"]} header="FF3F981-0098" description="July 15, 2025 — 10:43 AM" >
                <WithdrawalDetailCard />
            </DrawerLayout>
        );

    return (
        <SheetLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Wallet", "Transactions", "FF3F981-0098"]} header="FF3F981-0098" description="July 15, 2025 — 10:43 AM" >
            <WithdrawalDetailCard />
        </SheetLayout>
    );
}; 