import React from "react";
import { GlobeAsiaAustraliaIcon, WalletIcon } from "@heroicons/react/24/outline";

const page = () => {
  return (
    <div className="overflow-x-auto pt-10">
      <table className="table bg-slate-800 table-lg">
        {/* head */}
        <thead>
          <tr>
            <th>
              <div className="text-white gap-1 font-semibold text-xl flex justify-center items-center flex-col">
                <WalletIcon className="w-8 h-8 text-primary" />
                Address
              </div>
            </th>
            <th>
              <div className="text-white gap-1 font-semibold text-xl flex justify-center items-center flex-col">
                <GlobeAsiaAustraliaIcon className="w-8 h-8 text-primary" />
                Saved cups
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover">
            <td>0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266</td>
            <td>9</td>
          </tr>
          {/* row 2 */}
          <tr className="hover">
            <td>0xb123dCe044EdF0a755505d9623Fba16C0F41cae9</td>
            <td>4</td>
          </tr>
          {/* row 3 */}
          <tr className="hover">
            <td>0x9E8CEC4F2F4596141B62e88966D7167E9db555aD</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
