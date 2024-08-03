"use client";

import React from "react";
import { NextPage } from "next";
import Button from "~~/components/base/Button";
import { Input } from "~~/components/base/Input";
import { Select } from "~~/components/base/Select";

const Withdraw: NextPage = () => {
  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <div className="flex flex-col bg-base-100 px-10 py-10 items-center max-w-xs rounded-3xl text-center">
        <div className="flex justify-center items-center space-x-2 flex-row sm:flex-row">
          <div className="flex flex-col bg-base-100 px-10 py-10 gap-5 text-center items-center max-w-xs rounded-3xl">
            <Select label="Asset" options={["Coffee", "Tea", "Milk", "Juice"]} />
            <Input type="number" label="Amount" />
          </div>
        </div>
        <div className="flex flex-col bg-base-100 px-10  gap-5 text-center items-center max-w-xs rounded-3xl">
          <Button>Enviar</Button>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
