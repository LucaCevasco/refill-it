"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import QRCode from "react-qr-code";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Button from "~~/components/base/Button";
import { Address } from "~~/components/scaffold-eth";

// import deployedContracts from "~~/contracts/deployedContracts";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  // const { writeContract } = useWriteContract();
  // writeContract({
  //   address: deployedContracts[31337].YourContract.address,
  //   abi: deployedContracts[31337].YourContract.abi,
  //   functionName: "setGreeting",
  //   args: ['Hello world!']
  // })
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 flex flex-col">
          <div className="flex relative self-center w-40 h-40 mb-4">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
          </div>
          <h1 className="text-center">
            <span className="block text-4xl font-bold">
              <span className="bg-gradient-to-b from-primary to-secondary text-transparent bg-clip-text">REFILL</span>
              -IT
            </span>
          </h1>
          <span className="self-center text-2xl mb-2 mt-8 font-semibold">Welcome</span>
          <div className="flex justify-center items-center space-x-2 flex-row sm:flex-row">
            <Address address={connectedAddress} />
          </div>
        </div>
        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12 text-center">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row text-center">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl text-center">
              <Button>Buy Coffee</Button>
            </div>
          </div>
        </div>
        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={connectedAddress || "test"}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>
        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
