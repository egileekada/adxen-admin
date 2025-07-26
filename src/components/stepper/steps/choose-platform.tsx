<<<<<<< HEAD
import { BsBing } from "react-icons/bs";
import {
  RiMetaFill,
  RiGoogleFill,
  RiTiktokFill,
  RiSnapchatFill,
} from "@remixicon/react";

import { cn } from "@/lib/utils";
import { usePlatformSelect, type Platform } from "@/hooks/use-stepper-store";

const ChoosePlatform = () => {
  const { selectedPlatform, setSelectedPlatform } = usePlatformSelect();

  const handleSelectPlatform = (platform: string) => {
    setSelectedPlatform(platform as Platform);
  };

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-default font-inter">
        Request Ad Acccount
      </h1>
      <p className="text-sm sm:text-base font-inter font-normal text-subtle mt-2 sm:max-w-md">
        Select the advertising platform you'd like to request an ad account for.
        Each platform has its own setup requirements.
      </p>

      <div className="flex flex-col gap-3 my-4">
        <p className="text-sm font-inter font-normal text-default">
          Choose platform
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <div
            className={cn(
              "flex items-center gap-2 bg-soft  invert-60 cursor-pointer  rounded-full px-2 py-1.5",
              selectedPlatform === "meta" &&
                "bg-basic-blue-accent text-white invert-0"
            )}
            onClick={() => handleSelectPlatform("meta")}
          >
            <RiMetaFill className="size-4" />
            <p
              className={cn(
                "text-sm font-inter font-normal text-default",
                selectedPlatform === "meta" && "text-white"
              )}
            >
              Meta
            </p>
          </div>
          <div
            className={cn(
              "flex items-center gap-2 bg-soft  invert-60 cursor-pointer rounded-full px-2 py-1.5",
              selectedPlatform === "google" &&
                "bg-basic-blue-accent text-white invert-0"
            )}
            onClick={() => handleSelectPlatform("google")}
          >
            <RiGoogleFill className="size-4" />
            <p
              className={cn(
                "text-sm font-inter font-normal text-default",
                selectedPlatform === "google" && "text-white"
              )}
            >
              Google
            </p>
          </div>
          <div
            className={cn(
              "flex items-center gap-2 bg-soft  invert-60 cursor-pointer  rounded-full px-2 py-1.5",
              selectedPlatform === "tiktok" &&
                "bg-basic-blue-accent text-white invert-0"
            )}
            onClick={() => handleSelectPlatform("tiktok")}
          >
            <RiTiktokFill className="size-4" />
            <p
              className={cn(
                "text-sm font-inter font-normal text-default",
                selectedPlatform === "tiktok" && "text-white"
              )}
            >
              TikTok
            </p>
          </div>
          <div
            className={cn(
              "flex items-center gap-2 bg-soft  invert-60 cursor-pointer  rounded-full px-2 py-1.5",
              selectedPlatform === "snapchat" &&
                "bg-basic-blue-accent text-white invert-0"
            )}
            onClick={() => handleSelectPlatform("snapchat")}
          >
            <RiSnapchatFill className="size-4" />
            <p
              className={cn(
                "text-sm font-inter font-normal text-default",
                selectedPlatform === "snapchat" && "text-white"
              )}
            >
              Snapchat
            </p>
          </div>
          <div
            className={cn(
              "flex items-center gap-2 bg-soft  invert-60 cursor-pointer rounded-full px-2 py-1.5",
              selectedPlatform === "bing" &&
                "bg-basic-blue-accent text-white invert-0"
            )}
            onClick={() => handleSelectPlatform("bing")}
          >
            <BsBing className="size-4" />
            <p
              className={cn(
                "text-sm font-inter font-normal text-default",
                selectedPlatform === "bing" && "text-white"
              )}
            >
              Bing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
=======
import React from "react";

const ChoosePlatform = () => {
  return <div>ChoosePlatform</div>;
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
};

export default ChoosePlatform;
