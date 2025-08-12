import { CustomButton } from "@/components/custom";
import { ModalLayout } from "@/components/shared";
import { useModal } from "@/hooks/use-modal";



export default function WithdrawalSuccess() {
    const { isOpen, closeModal } = useModal(); 

    return(
        <ModalLayout isOpen={isOpen} closeModal={closeModal} >
            <div className=" w-full flex flex-col px-4 h-[295px] justify-center items-center gap-6 " >
                <img alt="logo" src="/images/success.png" className=" w-10 " />
                <div className=" flex flex-col gap-2 " >
                    <p className=" font-medium text-center " >Withdrawal Request Received</p>
                    <p className=" text-sm text-center max-w-[276px] " >{`Your withdrawal request has been submitted successfully. We're currently reviewing it, and you'll be notified once it's processed.`}</p>
                </div>
                <CustomButton onClick={closeModal} className=" w-full " variant={"outline"} >
                    Done
                </CustomButton>
            </div>
        </ModalLayout>
    )
}