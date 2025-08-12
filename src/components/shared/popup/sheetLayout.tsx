import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { X } from "lucide-react"

export default function SheetLayout(
    {
        isOpen,
        closeModal,
        children,
        breadcrumb,
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
        <Sheet open={isOpen} onOpenChange={closeModal}>
            <SheetContent className="w-[430px] mt-2 mr-2 flex flex-col gap-5 rounded-md h-fit sm:max-w-md md:max-w-md mx-auto overflow-hidden">
                <SheetHeader className=" relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] px-5 py-6 flex flex-col gap-2">
                    <SheetTitle>
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
                    </SheetTitle>
                    <div
                        className="absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer"
                        onClick={closeModal}
                    >
                        <X className="size-4 text-default" />
                    </div>
                    <SheetDescription className="text-xl font-bold text-default">
                        {header}
                    </SheetDescription>
                </SheetHeader>
                {children}
            </SheetContent>
        </Sheet>
    )
}