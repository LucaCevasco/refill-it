// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   const nonce = 2;
//   const signer = req.query.user;
//   const to = signer;

//   const messageHash = ethers.utils.solidityKeccak256(
//       ["address", "uint256", "uint256"],
//       [to, amount, nonce]
//       );

//   // Firmar el mensaje
//   const signature = await wallet.signMessage(ethers.utils.arrayify(messageHash));

//   // redeem
//   tx = await ReFillToken.redeem(to, nonce, amount, signature, {gasLimit:1000000});
//   receipt = await tx.wait();

//   res.status(200).json({ message: 'Hello from Next.js!' })
// };
