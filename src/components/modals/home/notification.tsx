 
import { DrawerLayout, SheetLayout } from "@/components/shared";
import { useIsMobile } from "@/hooks/use-mobile";
import { useModal } from "@/hooks/use-modal";


export default function NotificationModal() {
    const { isOpen, closeModal } = useModal();
    const isMobile = useIsMobile(); 

    const NotificationCards = () => {
        return (
            <div className=" w-full h-[80vh] overflow-y-auto " > 
                <div className=" w-full flex flex-col gap-3 px-5 pb-5 " >
                    <div className=" w-full flex pb-5 border-b " >
                        <div className=" flex gap-2 items-center " >
                            <div className=" w-8 h-8 rounded-full bg-amber-300 " /> 
                            <p className=" max-w-[248px] text-sm " >Your wallet has been credited with $500.00 USD.</p> 
                        </div>
                        <p className=" text-xs ml-auto text-muted " >30 mins ago</p>
                    </div>
                    <div className=" w-full flex pb-5 border-b " >
                        <div className=" flex gap-2 items-center " >
                            <div className=" w-8 h-8 rounded-full bg-amber-300 " /> 
                            <p className=" max-w-[248px] text-sm " >Your wallet has been credited with $500.00 USD.</p> 
                        </div>
                        <p className=" text-xs ml-auto text-muted " >30 mins ago</p>
                    </div>
                    <div className=" w-full flex pb-5 border-b " >
                        <div className=" flex gap-2 items-center " >
                            <div className=" w-8 h-8 rounded-full bg-amber-300 " /> 
                            <p className=" max-w-[248px] text-sm " >Your wallet has been credited with $500.00 USD.</p> 
                        </div>
                        <p className=" text-xs ml-auto text-muted " >30 mins ago</p>
                    </div>
                </div> 
            </div>
        )
    }

    if (isMobile)
        return (
            <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Home", "Notification"]} header="Notifications" >
                <NotificationCards />
            </DrawerLayout>
        );

    return (
        <SheetLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Home", "Notification"]} header="Notifications" >
            <NotificationCards />
        </SheetLayout>
    );
}; 