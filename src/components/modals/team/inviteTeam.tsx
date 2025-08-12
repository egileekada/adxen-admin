
import { CustomButton, CustomInput } from "@/components/custom";
import { DrawerLayout, SheetLayout } from "@/components/shared";
import { useIsMobile } from "@/hooks/use-mobile";
import { useModal } from "@/hooks/use-modal";


export default function InviteTeam() {
    const { isOpen, closeModal } = useModal();
    const isMobile = useIsMobile();

    const changeHandler = (item: string, value: string) => {
        console.log(item + " " + value);
    }

    const TeamForm = () => {
        return (
            <div>

                <div className=" w-full flex flex-col gap-3 px-5 pb-5 " >
                    <p className=" text-muted text-sm " >{`Add staff to your agency workspace and assign their role.`}</p>
                    <CustomInput placeholder="" label="First name" name={""} setValue={changeHandler} />
                    <CustomInput placeholder="" label="Last name" name={""} setValue={changeHandler} />
                    <CustomInput placeholder="" label="Email" name={""} setValue={changeHandler} />
                    <CustomInput placeholder="" label="Role" name={""} setValue={changeHandler} />
                </div>

                <div className="flex justify-between items-center px-6 py-4 border-t border-border-darker">
                    <CustomButton variant="outline" >
                        Cancel
                    </CustomButton>
                    <CustomButton type="submit">
                        Send Invitation
                    </CustomButton>
                </div>
            </div>
        )
    }

    if (isMobile)
        return (
            <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Team members"]} header="Invite team member" >
                <TeamForm />
            </DrawerLayout>
        );

    return (
        <SheetLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Team members"]} header="Invite team member" >
            <TeamForm />
        </SheetLayout>
    );
}; 