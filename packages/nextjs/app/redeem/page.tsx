"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CUP_COST } from "../withdraw/page";
import { NextPage } from "next";
import { parseUnits } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const Redeem: NextPage = () => {
  const router = useRouter();
  const { address: connectedAddress } = useAccount();
  const { data: usdcSuppliedBalance } = useScaffoldReadContract({
    contractName: "ReFillToken",
    functionName: "balanceOf",
    args: [connectedAddress],
  });
  const { data: nativeSuppliedBalance } = useScaffoldReadContract({
    contractName: "ReFillTokenNative",
    functionName: "balanceOf",
    args: [connectedAddress],
  });

  const { writeContractAsync: writeNative, isPending: isPendingNative } = useScaffoldWriteContract("ReFillTokenNative");
  const { writeContractAsync: writeUSDC, isPending: isPendingUSDC } = useScaffoldWriteContract("ReFillToken");
  const searchParams = useSearchParams();

  const handleRedeem = async () => {
    console.log({ connectedAddress, writeNative, writeUSDC, usdcSuppliedBalance, nativeSuppliedBalance });
    if (usdcSuppliedBalance) {
      await writeUSDC(
        {
          functionName: "redeem",
          args: [
            connectedAddress,
            BigInt(searchParams.get("nonce") as string),
            // todo enviar valor correcto
            BigInt(parseUnits(CUP_COST.toString(), 6).toString()),
            searchParams.get("signature") as `0x${string}`,
          ],
        },
        {
          onBlockConfirmation: blockNumber => {
            console.log("⚡️ ~ file: Redeem.tsx:handleRedeem ~ blockNumber", blockNumber);
            router.replace("/success");
          },
          onSuccess: data => {
            console.log("⚡️ ~ file: Redeem.tsx:handleRedeem ~ data", data);
          },
        },
      );
    }

    // if (nativeSuppliedBalance) {
    //   await writeNative({
    //     functionName: 'redeem',
    //     args: [
    //       connectedAddress,
    //       BigInt(searchParams.get('nonce') as string),
    //       BigInt(parseUnits((2 / nativeCurrencyPrice).toString(), 18).toString()),
    //       searchParams.get('signature') as `0x${string}`,
    //     ],
    //   }, {
    //     onBlockConfirmation: blockNumber => {
    //       console.log('⚡️ ~ file: Redeem.tsx:handleRedeem ~ blockNumber', blockNumber);
    //     },
    //     onSuccess: data => {
    //       console.log('⚡️ ~ file: Redeem.tsx:handleRedeem ~ data', data);
    //     },
    //   });
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {isPendingNative || isPendingUSDC ? (
        <>
          <h1 className="text-3xl font-bold my-5">Redeeming your cup</h1>
          <span className="loading loading-spinner loading-xl"></span>
        </>
      ) : (
        <button className="text-3xl font-bold my-5" onClick={handleRedeem}>
          Redeem your cup!
        </button>
      )}
    </div>
  );
};

export default Redeem;
