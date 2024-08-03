import React from "react";
import { Address } from "../scaffold-eth";
import { useAccount } from "wagmi";

export const UserShowcase = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div className="px-5 flex flex-col">
      <span className="self-center text-2xl mb-2 mt-8 font-semibold">Welcome</span>
      <div className="flex justify-center items-center space-x-2 flex-row sm:flex-row">
        <Address address={connectedAddress} />
      </div>
    </div>
  );
};
