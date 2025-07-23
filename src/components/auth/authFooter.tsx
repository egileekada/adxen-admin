

export default function AuthFooter (
    {
        text,
        linktext, 
        link
    } : {
        text: string;
        linktext: string,
        link: string
    }
) {
    return(
        <div className=" mt-auto bg-[#fafafa] rounded-b-2xl h-[68px] w-full flex justify-center items-center " >
            <p className=" text-sm " >{text} <a href={link} className=" text-[#2B5DF3] font-medium " >{linktext}</a></p>
        </div>
    )
}