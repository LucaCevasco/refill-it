"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import Button from "~~/components/base/Button";

const Success: NextPage = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.replace("/");
  };

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <CheckBadgeIcon className="h-56 w-56 bg-gradient-to-r from-primary to-secondary text-primary p-2 rounded-full" />
      <h1 className="text-3xl font-bold mb-4 text-center">Transaction Successful</h1>
      <p className="text-center">Now you can enjoy your coffee while you help the environment</p>
      <Button onClick={handleGoBack}>Accept</Button>
    </div>
  );
};

export default Success;
