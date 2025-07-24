import { AccountTypeForm, AdvertisingInfoForm, ChoosePlanForm, PersonalInfoForm, SuccessMessage } from "@/components/onboarding";
import { useQuery } from "@/components/utils/useQuery";


export default function OnboardingPage () {

    const query = useQuery();
    const type = query.get('type'); 

    return (
        <div className=" w-full h-full flex justify-center items-center " >
            {!type && (
                <PersonalInfoForm />
            )}
            {type === "account" && (
                <AccountTypeForm />
            )}
            {type === "ads" && (
                <AdvertisingInfoForm />
            )}
            {type === "plan" && (
                <ChoosePlanForm />
            )}
            {type === "success" && (
                <SuccessMessage />
            )}
        </div>
    )
}