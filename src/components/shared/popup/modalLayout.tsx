import { Dialog, DialogContent, DialogOverlay, DialogPortal } from "@/components/ui/dialog"

export default function ModalLayout( 
    {
        isOpen,
        closeModal,
        children, 
    }: {
        isOpen: boolean,
        closeModal: any,
        children: React.ReactNode 
    }
) {
    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogPortal>
                <DialogOverlay className="bg-black/15" />
                <DialogContent
                    className=" w-[400px] flex flex-col gap-1 items-center justify-center bg-linear-to-b from-40% from-[#F2FDFA] to-white"
                    showCloseButton={false}
                >  
                    {children}
                </DialogContent>
            </DialogPortal>
        </Dialog>
    )
}