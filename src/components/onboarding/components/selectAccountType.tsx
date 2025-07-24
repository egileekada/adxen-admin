import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"


export default function SelectAccountType() {
    return (
        <div className=" w-full flex flex-col gap-4 " >
            <RadioGroup defaultValue="comfortable">
                <div className="flex gap-3 p-4 rounded-md border-2 border-border-darker hover:border-blue-infomative "> 
                        <RadioGroupItem value="default" className=" mt-[2px] " id="r1" />
                        <div className=" flex flex-col " >
                            <p className=" text-sm font-medium " >Individual</p>
                            <p className=" text-sm " >For personal ad account management.</p>
                        </div> 
                </div>
                <div className="flex gap-3 p-4 rounded-md border-2 border-border-darker hover:border-blue-infomative "> 
                        <RadioGroupItem value="default" className=" mt-[2px] " id="r1" />
                        <div className=" flex flex-col " >
                            <p className=" text-sm font-medium " >Business</p>
                            <p className=" text-sm " >For companies or agencies managing multiple accounts.</p>
                        </div> 
                </div>
            </RadioGroup>
        </div>
    )
}