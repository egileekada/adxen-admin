
import { CustomButton, CustomInput } from "@/components/custom";
import { DrawerLayout, SheetLayout } from "@/components/shared";
import { useIsMobile } from "@/hooks/use-mobile";
import { useModal } from "@/hooks/use-modal";


export default function VerificationModal() {
    const { isOpen, closeModal } = useModal();
    const isMobile = useIsMobile();

    const changeHandler = (item: string, value: string) => {
        console.log(item + " " + value);
    }

    const VerificationForm = () => {
        return (
            <div>

                <div className=" w-full flex flex-col gap-3 px-5 pb-5 " >
                    <p className=" text-muted text-sm " >{`Choose a verification method, We'll review and confirm your details with 2 business days`}</p>
                    <CustomInput placeholder="" label="Choose Country *" name={""} setValue={changeHandler} />
                    <CustomInput placeholder="" label="Choose verification type *" name={""} setValue={changeHandler} />
                    <CustomInput placeholder="" label="Provide business ID *" name={""} setValue={changeHandler} />
                </div>

                <div className="flex justify-between items-center px-6 py-4 border-t border-border-darker">
                    <CustomButton variant="outline" >
                        Cancel
                    </CustomButton>
                    <CustomButton type="submit">
                        Submit
                    </CustomButton>
                </div>
            </div>
        )
    }

    if (isMobile)
        return (
            <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Home", "Verification"]} header="Verify your identity" >
                <VerificationForm />
            </DrawerLayout>
        );

    return (
        <SheetLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Home", "Verification"]} header="Verify your identity" >
            <VerificationForm />
        </SheetLayout>
    );
}; 