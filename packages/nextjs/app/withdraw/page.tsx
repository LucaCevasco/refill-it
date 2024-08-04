"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import { parseEther, parseUnits } from "viem";
import Button from "~~/components/base/Button";
import { Input } from "~~/components/base/Input";
import { Select } from "~~/components/base/Select";
import deployedContracts from "~~/contracts/deployedContracts";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { ASSETS } from "~~/utils/scaffold-eth/common";

const CUP_COST = 2;

const Withdraw: NextPage = () => {
  const router = useRouter();
  const [asset, setAsset] = useState<"ETH" | "USDC">();
  const { isPending: isPendingNative, writeContractAsync: sendNativeWrite } =
    useScaffoldWriteContract("ReFillTokenNative");
  const { writeContractAsync: sendRefillUsdcWrite, isPending } = useScaffoldWriteContract("ReFillToken");
  const { writeContractAsync: sendUsdcwrite } = useScaffoldWriteContract("USDC");
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);

  const handleWithdraw = async () => {
    if (!asset) return;
    if (asset === "USDC") {
      await sendUsdcwrite(
        {
          functionName: "approve",
          args: [deployedContracts[534351].ReFillToken.address, parseUnits(CUP_COST.toString(), 6)],
        },
        {
          onSuccess: data => {
            console.log("Success", data);
          },
          onBlockConfirmation: blockNumber => {
            console.log("Block number confirmed", blockNumber);
          },
        },
      );
    }

    const contractToCall = asset === "ETH" ? sendNativeWrite : sendRefillUsdcWrite;
    const amount = asset === "ETH" ? (2 / nativeCurrencyPrice).toString() : CUP_COST.toString();
    const decimalPlaces = ASSETS[asset].decimals;

    await contractToCall(
      {
        functionName: "supply",
        args: [parseUnits(amount, decimalPlaces)],
        ...(asset === "ETH" ? { value: parseEther(amount) } : {}),
      },
      {
        onBlockConfirmation: blockNumber => {
          console.log("Block number confirmed", blockNumber);
          router.replace("/");
        },
        onSuccess: data => {
          console.log("Success", data);
        },
      },
    );
  };

  const changeAsset = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value != "ETH" && e.target.value != "USDC") {
      return;
    }
    setAsset(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <div className="flex flex-col bg-base-100 px-10 py-10 items-center max-w-xs rounded-3xl text-center">
        <div className="flex justify-center items-center space-x-2 flex-row sm:flex-row">
          <div className="flex flex-col bg-base-100 px-10 pt-10 gap-5 text-center items-center max-w-xs rounded-3xl">
            <Select label="Asset" options={["ETH", "USDC"]} value={asset} onChange={changeAsset} />
            <Input type="number" label="Amount" disabled={true} value={CUP_COST} />
            {asset === "ETH" ? `ETH Price: ${(2 / nativeCurrencyPrice).toString()}` : null}
          </div>
        </div>
        <div className="flex flex-col bg-base-100 px-10 gap-5 text-center items-center max-w-xs rounded-3xl">
          <Button onClick={handleWithdraw} disabled={!asset} loading={isPending || isPendingNative}>
            Withdraw cup
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
