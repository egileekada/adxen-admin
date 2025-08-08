import { CustomButton } from "@/components/custom";
import { Graph } from "@/components/home";
import HeaderDescription from "@/components/shared/headerDecription";
import Stats from "@/components/shared/stats";
import WalletBtn from "@/components/shared/walletBtn";
import { RiInformation2Fill } from "@remixicon/react";

export default function HomePage() {

  const accounts = [
    {
      id: 1,
      name: "Active Ad Accounts",
      value: 0
    },
    {
      id: 2,
      name: "Ad Account Requests",
      value: 0
    },
    {
      id: 3,
      name: "Compliance score",
      value: 0
    }
  ];

  return (
    <div className=" w-full h-auto flex flex-1 flex-col gap-6 " >
      <HeaderDescription
        title="Hey Stefan,"
        description={`Welcome to your Adxens dashboard. Let's get your ad accounts up and running.`}
        showActionButton={false}
        showCopyButton={false}
      />
      <div className=" w-full rounded-xl " >
        <div className=" w-full flex rounded-t-xl bg-badge-blue justify-between px-5 py-3 " >
          <div className=" flex items-center gap-1 text-sm text-blue-infomative " >
            <RiInformation2Fill size={"14px"} />
            <p >Complete these steps to unlock full access.</p>
          </div>
          <CustomButton>
            <p>Continue</p>
          </CustomButton>
        </div>
        <div className=" w-full flex border rounded-b-xl p-5 " >
          <div className=" w-full flex flex-col gap-2 " >
            <div className=" w-full flex items-center "  >
              <div className=" w-6 h-6 rounded-full bg-blue-infomative flex justify-center items-center font-semibold text-xs text-white " >
                1
              </div>
              <div className=" h-[1px] bg-muted w-full " />
            </div>
            <div className=" flex-col flex text-sm " >
              <p className=" font-medium " >Enable 2FA</p>
              <p className=" text-blue-infomative " >In progress</p>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-2 " >
            <div className=" w-full flex items-center "  >
              <div className=" w-6 h-6 rounded-full bg-white flex justify-center items-center font-semibold text-xs text-default border " >
                2
              </div>
              <div className=" h-[1px] bg-muted w-full " />
            </div>
            <div className=" flex-col flex text-sm " >
              <p className=" font-medium " >Verify your identity</p>
              <p className=" text-muted " >Not done</p>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-2 " >
            <div className=" w-full flex items-center "  >
              <div className=" w-6 h-6 rounded-full bg-white flex justify-center items-center font-semibold text-xs text-default border " >
                3
              </div>
              <div className=" h-[1px] bg-muted w-full " />
            </div>
            <div className=" flex-col flex text-sm " >
              <p className=" font-medium " >Fund your wallet</p>
              <p className=" text-muted " >Not done</p>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-2 " >
            <div className=" w-full flex items-center "  >
              <div className=" w-6 h-6 rounded-full bg-white flex justify-center items-center font-semibold text-xs text-default border " >
                4
              </div>
              <div className=" h-[1px] bg-muted w-full " />
            </div>
            <div className=" flex-col flex text-sm " >
              <p className=" font-medium " >Request ad account</p>
              <p className=" text-muted " >Not done</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between border border-border-darker rounded-lg ">
        {accounts.map((account) => (
          <Stats key={account.id} name={account.name} value={account.value} />
        ))}
      </div>
      <Graph />
      <WalletBtn />  
    </div>
  );
} 
