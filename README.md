# Refill-IT

Refill-IT is a decentralized application (dApp) designed to incentivize environmentally-friendly behavior by allowing users to earn rewards for returning used items, such as coffee cups. The project utilizes smart contracts deployed on the scroll-sepolia blockchain, a frontend built with Next.js, TypeScript, and the Wagmi library to interact with Ethereum.

## Project Overview

### Smart Contracts

#### For more detail visit the smart contract repo https://github.com/cloud1992/ReFillItLendingToken

#### ReFillToken

ReFillToken is a smart contract solution designed to incentivize environmentally-friendly behavior by allowing users to deposit underlying tokens into the Aave v3 protocol, receive ReFill tokens in return, and later redeem these tokens to recover their underlying assets. This solution is compatible with any Ethereum Virtual Machine (EVM) chain, and for this project, we are focusing on the Scroll blockchain as part of our participation in a Hackathon sponsored by Scroll.

##### Contract Overview

ReFillToken is implemented through two separate contracts:

- **ReFillTokenNative**: Designed for native tokens (e.g., ETH).
- **ReFillToken**: Designed for non-native tokens such as stablecoins (e.g., USDC).

##### Supported Assets

ReFillToken supports the following types of underlying assets:

- **Native Token (ETH)**: Managed through the `ReFillTokenNative` contract.
- **USDC (USD Coin)**: Managed through the `ReFillToken` contract.

##### Deployed Contracts on Scroll-Sepolia

- **ReFillTokenNative (ETH)**: [0x5e5713a0d915701f464debb66015add62b2e6ae9](https://sepolia.scrollscan.com/address/0x5e5713a0d915701f464debb66015add62b2e6ae9)
- **ReFillTokenUSDC**: [0x97fd63d049089cd70d9d139ccf9338c81372de68](https://sepolia.scrollscan.com/address/0x97fd63d049089cd70d9d139ccf9338c81372de68)

##### Key Functions

- **supply**: Allows users to deposit underlying tokens (ETH or USDC) and receive ReFill tokens in proportion to the deposited amount and the current exchange rate.
- **redeem**: Enables users to redeem their ReFill tokens to recover underlying tokens. The accrued interest from these tokens is allocated to the protocol reserves.
- **removeReserves**: Only accessible by the contract owner. Allows the withdrawal of funds from the protocol's reserves.

##### Interaction with Aave v3

The ReFillToken contracts interact with the Aave v3 protocol for depositing and withdrawing underlying tokens:

- **ReFillTokenNative**: Uses the `IWETHGateway` to convert and deposit native tokens (ETH) into Aave.
- **ReFillToken**: Directly supplies and withdraws non-native tokens (USDC) through the `IPool` interface.

##### Exchange Rate and Reserves

- The exchange rate (`_exchangeRate`) is used to determine how many ReFill tokens are minted for each underlying token deposited.
- The contracts maintain reserves (`_totalReserves`), which can be withdrawn by the contract owner using the `removeReserves` function.

### Frontend

The frontend of ReFillIt is built with Next.js and TypeScript, providing a responsive and user-friendly interface for interacting with the smart contracts. The Wagmi library is used to manage blockchain interactions, such as connecting wallets and sending transactions.

Key components:

- **Home Page**: Provides links to different features of the dApp, such as debugging contracts and exploring transactions.
- **Success Page**: Displays a confirmation message after a successful transaction.
- **Withdraw Page**: Allows users to select an asset and amount to withdraw from the smart contract.

## Tech Stack

- **Smart Contracts**: Solidity, Aave v3, Foundry
- **Frontend**: Next.js, TypeScript, React, Wagmi, RainbowKit
- **Blockchain Interaction**: Wagmi, ethers.js, Viem

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Hardhat](https://hardhat.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ReFillIt.git
   cd ReFillIt
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

### Running the Project

1. Start the development server for the frontend:

   ```bash
   yarn start
   ```

2. Deploy the smart contracts to a local blockchain:

   ```bash
   yarn chain
   yarn deploy
   ```

3. Access the application at `http://localhost:3000`.

## Usage

### Interacting with the dApp

- **Home Page**: Navigate through the app’s features like Debug Contracts and Block Explorer.
- **Success Page**: After completing a transaction, you will see a success message and be able to return to the home page.
- **Withdraw Page**: Choose an asset and enter an amount to withdraw your earnings.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to discuss changes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
