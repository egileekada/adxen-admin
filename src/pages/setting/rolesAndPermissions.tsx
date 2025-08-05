import { CustomButton } from "@/components/custom";
import HeaderDescription from "@/components/shared/headerDecription";
import { Switch } from "@/components/ui/switch";
import { useQuery } from "@/components/utils/useQuery";
import { RiKey2Line, RiUserStarLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

export default function RolesAndPermission() {
    const query = useQuery();
    const navigate = useNavigate()
    const type = query.get('type');
    return (
        <div className=" w-full flex gap-6 " >
            <div className=" w-fit " >
                <div className=" w-[258px] rounded-md border p-[10px] border-border-default gap-2 flex flex-col " >
                    <p className=" uppercase text-xs text-muted " >select menu</p>
                    <div onClick={() => navigate("/dashboard/settings/rolespermission")} className={` cursor-pointer ${!type ? " bg-badge-blue text-blue-infomative " : ""} p-[6px] text-sm font-medium rounded-sm h-[32px] gap-[6px] flex items-center `} >
                        <RiUserStarLine size={"18px"} />
                        <p>Roles</p>
                    </div>
                    <div onClick={() => navigate("?type=permission")} className={` cursor-pointer ${type === "permission" ? " bg-badge-blue text-blue-infomative " : ""} p-[6px] text-sm font-medium rounded-sm h-[32px] gap-[6px] flex items-center `} >
                        <RiKey2Line size={"18px"} />
                        <p>Permission</p>
                    </div>
                </div>
            </div>
            <div className=" w-full " >
                {!type && (
                    <div className=" max-w-[623px] w-full flex flex-col gap-3 " >
                        <div className=" w-full pb-3 border-b " >
                            <HeaderDescription
                                title="Roles"
                                description="Define the level of access each team member should have based on their responsibilities."
                                showActionButton={false}
                                showCopyButton={false}
                                subtitle={true}
                            />
                        </div>
                        <div className=" w-full flex flex-col gap-4 " >
                        </div>
                    </div>
                )} 
                {type === "permission" && (
                    <div className=" max-w-[623px] w-full flex flex-col gap-3 " >
                        <div className=" w-full pb-3 border-b " >
                            <HeaderDescription
                                title="Permission"
                                description="View the exact actions each role can perform."
                                showActionButton={false}
                                showCopyButton={false}
                                subtitle={true}
                            />
                        </div>
                        <div className=" w-full flex flex-col gap-4 pt-3 " >
                            <div className=" w-full flex flex-col gap-2 pb-3 border-b " > 
                                <p className=" text-sm font-medium " >View Customers</p>
                                <div className=" flex gap-4 " >
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Admin</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Manager</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex flex-col gap-2 pb-3 border-b " > 
                                <p className=" text-sm font-medium " >Edit Customer Profiles</p>
                                <div className=" flex gap-4 " >
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Admin</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Manager</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex flex-col gap-2 pb-3 border-b " > 
                                <p className=" text-sm font-medium " >View & Manage Transactions</p>
                                <div className=" flex gap-4 " >
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Admin</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Manager</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex flex-col gap-2 pb-3 border-b " > 
                                <p className=" text-sm font-medium " >Create & Edit Pricing Plans</p>
                                <div className=" flex gap-4 " >
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Admin</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Manager</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex flex-col gap-2 pb-3 border-b " > 
                                <p className=" text-sm font-medium " >Manage Agency Branding & Domain</p>
                                <div className=" flex gap-4 " >
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Admin</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Manager</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex flex-col gap-2 pb-3 border-b " > 
                                <p className=" text-sm font-medium " >Invite & Remove Team Members</p>
                                <div className=" flex gap-4 " >
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Admin</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Manager</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex flex-col gap-2 pb-3 border-b " > 
                                <p className=" text-sm font-medium " >Respond to Support Tickets</p>
                                <div className=" flex gap-4 " >
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Admin</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Manager</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex flex-col gap-2 pb-3 border-b " > 
                                <p className=" text-sm font-medium " >Suspend / Reactivate Client Accounts</p>
                                <div className=" flex gap-4 " >
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Admin</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Manager</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex flex-col gap-2 pb-3 border-b " > 
                                <p className=" text-sm font-medium " >Access Security Settings</p>
                                <div className=" flex gap-4 " >
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Admin</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Manager</p>
                                    </div>
                                    <div className=" flex gap-2 items-center " >
                                        <Switch />
                                        <p className=" text-sm " >Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full flex gap-3 pt-3 " >
                            <CustomButton className=" w-[110px] " >
                                <p>Update</p>
                            </CustomButton>
                            <CustomButton variant={"outline"} className=" w-[110px] " >
                                <p>Cancel</p>
                            </CustomButton>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}