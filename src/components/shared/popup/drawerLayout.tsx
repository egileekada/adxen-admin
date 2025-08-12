import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { X } from "lucide-react"

export default function DrawerLayout(
    {
        isOpen,
        closeModal,
        children,
        breadcrumb = [],
        header
    }: {
        isOpen: boolean,
        closeModal: any,
        children: React.ReactNode
        breadcrumb?: Array<string>,
        header?: string,
        description?: string
    }
) {
    return (
        <Drawer open={isOpen} onOpenChange={closeModal}>
            <DrawerContent className="w-full mt-2 rounded-t-md flex flex-col gap-5 h-fit sm:max-w-md md:max-w-md  mx-auto overflow-hidden">
                <DrawerHeader className="flex flex-col items-start relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] gap-2 p-6">
                    <DrawerTitle> 
                        <Breadcrumb className="text-sm font-normal flex items-center">
                            <BreadcrumbList>
                                {breadcrumb?.map((item, index) => {
                                    if (item) {
                                        return (
                                            <div key={index} className=" gap-1 items-center flex " >
                                                <BreadcrumbItem>{item}</BreadcrumbItem>
                                                {index + 1 !== breadcrumb?.length && (
                                                    <BreadcrumbSeparator />
                                                )}
                                            </div>
                                        )
                                    }
                                })}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </DrawerTitle>
                    <div
                        className="absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer"
                        onClick={closeModal}
                    >
                        <X className="size-4 text-default" />
                    </div>
                    <DrawerDescription className="text-xl font-bold text-default">
                        {header}
                    </DrawerDescription>
                </DrawerHeader>
                {children}
            </DrawerContent>
        </Drawer>
    )
}