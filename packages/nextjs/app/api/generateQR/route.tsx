import { kv } from "@vercel/kv";
import { createWalletClient, encodePacked, http, keccak256, toBytes } from "viem";
import { privateKeyToAccount } from "viem/accounts";

const walletSigner = createWalletClient({
  account: privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`),
  transport: http(process.env.SCROLL_API_KEY as string),
});

export async function POST(req: Request) {
  const nonce: string = (await kv.get("qrNonce")) || "0";
  const numericNonce: any = parseInt(nonce);
  const response = await req.json();
  const { to, tokenAmount } = response;

  const messageHash = keccak256(encodePacked(["address", "uint256", "uint256"], [to, tokenAmount, numericNonce]));
  const signature = await walletSigner.signMessage({
    message: {
      raw: toBytes(messageHash),
    },
  });

  await kv.set("qrNonce", (numericNonce + 1).toString());

  return Response.json({ signature, nonce: numericNonce });
}
