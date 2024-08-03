import React from "react";
import { NextPage } from "next";
import QRCode from "qrcode.react";

const Retrieve: NextPage = () => {
  return (
    <div className="relative w-64 h-64 p-8 mt-5">
      {/* Inner container for QR code */}
      <div className="relative w-full h-full bg-navy-900 rounded-2xl flex items-center justify-center">
        {/* QR code content */}
        <QRCode
          value="https://www.google.com"
          size={256}
          bgColor="#ffffff"
          fgColor="#000000"
          level="Q"
          includeMargin={false}
          renderAs="svg"
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-16 bg-gradient-to-br from-primary to-secondary rounded-tl-2xl"></div>
      <div className="absolute top-0 left-0 w-16 h-6 bg-gradient-to-bl from-secondary to-primary rounded-tl-2xl"></div>

      <div className="absolute top-0 right-0 w-6 h-16 bg-gradient-to-bl from-secondary to-primary rounded-tr-2xl"></div>
      <div className="absolute top-0 right-0 w-16 h-6 bg-gradient-to-br from-primary to-secondary rounded-tr-2xl"></div>

      <div className="absolute bottom-0 left-0 w-6 h-16 bg-gradient-to-tr from-primary to-secondary rounded-bl-2xl"></div>
      <div className="absolute bottom-0 left-0 w-16 h-6 bg-gradient-to-tl from-secondary to-primary rounded-bl-2xl"></div>

      <div className="absolute bottom-0 right-0 w-6 h-16 bg-gradient-to-tl from-secondary to-primary rounded-br-2xl"></div>
      <div className="absolute bottom-0 right-0 w-16 h-6 bg-gradient-to-tr from-primary to-secondary rounded-br-2xl"></div>
    </div>
  );
};

export default Retrieve;
