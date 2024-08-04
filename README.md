# ReFillIt

ReFillIt is a decentralized application (dApp) designed to incentivize environmentally-friendly behavior by allowing users to earn rewards for returning used items, such as coffee cups. The project utilizes smart contracts deployed on the blockchain, a frontend built with Next.js, TypeScript, and the Wagmi library to interact with Ethereum.

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

- **ReFillTokenNative (ETH)**: [0xa3f7bf5b0fa93176c260bba57cee85525de2baf4](https://sepolia.scrollscan.com/address/0xa3f7bf5b0fa93176c260bba57cee85525de2baf4)
- **ReFillTokenUSDC**: [0x25a1df485cfbb93117f12fc673d87d1cddeb845a](https://sepolia.scrollscan.com/address/0x25a1df485cfbb93117f12fc673d87d1cddeb845a)

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

- **Smart Contracts**: Solidity, Aave v3, Hardhat
- **Frontend**: Next.js, TypeScript, React
- **Blockchain Interaction**: Wagmi, ethers.js

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

3. Compile the smart contracts:
    ```bash
    yarn compile
    ```

### Running the Project

1. Start the development server for the frontend:
    ```bash
    yarn dev
    ```

2. Deploy the smart contracts to a local blockchain:
    ```bash
    yarn hardhat node
    yarn hardhat run scripts/deploy.js --network localhost
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























# 🏗 Scaffold-ETH 2

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Foundry, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
cd my-dapp-example
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Foundry. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/foundry/foundry.toml`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/foundry/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/foundry/script` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn foundry:test`

- Edit your smart contract `YourContract.sol` in `packages/foundry/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/foundry/script`


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.