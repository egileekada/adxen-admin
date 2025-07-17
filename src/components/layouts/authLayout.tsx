
export default function AuthLayout(
    {
        children
    } : {
        children: React.ReactNode
    }
) {
    return( 
        <div className={` w-full h-screen flex `} >
            <div className={` w-full h-screen relative bg-[#111111] lg:block hidden `} > 
                <div className={` p-8 flex flex-col `} >
                  <p className={` text-xs text-[#DFDFDF] `} >MONOSEND</p>
                  <p className={` text-[28px] font-semibold text-white `} >admin portal</p>
                </div>
                <img alt='auth' src='/images/auth.png' className={` absolute bottom-0 left-0 `} />
            </div>
            <div className={` w-full max-h-full `} > 
                {children}
            </div>
        </div>
    )
}