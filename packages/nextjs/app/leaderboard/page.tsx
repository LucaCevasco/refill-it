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
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
          </tr>
          {/* row 2 */}
          <tr className="hover">
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
          </tr>
          {/* row 3 */}
          <tr className="hover">
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
