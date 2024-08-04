"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import { GlobeAmericasIcon } from "@heroicons/react/20/solid";
import Button from "~~/components/base/Button";

const Impact: NextPage = () => {
  const router = useRouter();
  const savedCoups = 252;
  const userPctg = 50;

  const handleGoBack = () => {
    router.replace("/");
  };

  // TODO share on social media
  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <GlobeAmericasIcon className="h-48 w-48 bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-full" />
      <div>
        <p className="text-center">You have saved {savedCoups} cups trought the app</p>
        <p className="text-center">You are in the top {userPctg}% of the more active users in the app</p>
      </div>
      <div className="flex flex-row gap-4 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
        <Button outlined>Share</Button>
        <Button onClick={handleGoBack}>Accept</Button>
      </div>
    </div>
  );
};

export default Impact;
