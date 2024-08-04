import React from "react";
import { useRouter } from "next/navigation";
import Button from "../base/Button";
import { CoffeeCup } from "../icons/CoffeeCup";
import { GlobeAmericasIcon, QrCodeIcon, TrophyIcon } from "@heroicons/react/24/outline";

export const Menu = () => {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex-grow bg-base-300 w-full mt-16 px-8 pb-12 text-center">
      <div className="flex justify-center items-center gap-12 flex-col sm:flex-row text-center">
        <div className="flex flex-col bg-base-100 px-10 pb-10 text-center items-center max-w-xs rounded-3xl">
          <Button onClick={() => handleNavigate("/withdraw")}>
            <QrCodeIcon className="h-4 w-4 self-center mr-2" />
            Withdraw Cup
          </Button>
          <Button onClick={() => handleNavigate("/retrieve")}>
            <CoffeeCup className="h-4 w-4 self-center mr-2" />
            Generate QR (Coffee shop)
          </Button>
          <Button onClick={() => handleNavigate("/leaderboard")}>
            <TrophyIcon className="h-4 w-4 self-center mr-2" />
            Leaderboard
          </Button>
          <Button onClick={() => handleNavigate("/impact")}>
            <GlobeAmericasIcon className="h-4 w-4 self-center mr-2" />
            Your impact
          </Button>
        </div>
      </div>
    </div>
  );
};
