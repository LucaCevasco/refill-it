import { useQuery } from "@tanstack/react-query";

const BASE_URL = process.env.VERCEL_URL;

export const useQR = (userAddress: string, tokenAmount: string) =>
  useQuery({
    queryKey: ["qr"],
    queryFn: async () => {
      const qr = await fetch("/api/generateQR", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: userAddress,
          tokenAmount,
        }),
      });
      const qrResponse = await qr.json();
      const redirectUrl = BASE_URL
        ? `https://${BASE_URL}/redeem?signature${qrResponse.signature}&nonce=${qrResponse.nonce}`
        : `http://localhost:3000/redeem?signature=${qrResponse.signature}&nonce=${qrResponse.nonce}`;
      return redirectUrl;
    },
    enabled: !!userAddress,
  });
