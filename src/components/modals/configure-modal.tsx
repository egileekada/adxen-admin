import { useModal } from "@/hooks/use-modal";
import { Drawer, DrawerDescription, DrawerTitle } from "../ui/drawer";
import { DrawerContent } from "../ui/drawer";
import { DrawerHeader } from "../ui/drawer";

const ConfigureModal = () => {
  const { isOpen, closeModal } = useModal();

  console.log(isOpen);

  return (
    <Drawer open={isOpen} onOpenChange={closeModal}>
      <DrawerContent className="w-full mt-2 rounded-t-md h-fit sm:max-w-md md:max-w-md  mx-auto">
        <DrawerHeader className="sr-only">
          <DrawerTitle>Add Meta Business Manager ID</DrawerTitle>
          <DrawerDescription>
            Complete the form to request connection to your Meta Business
            Manager account
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-6">
          <h1 className="text-2xl font-bold">Configure</h1>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ConfigureModal;
