//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/ReFillTokenNative.sol";
import "../contracts/ReFillToken.sol";
import "../contracts/ReFillTokenConfig.sol";
import "../lib/aavev3/IAToken.sol";
import "./DeployHelpers.s.sol";

import "./Config.sol";

contract DeployScript is ScaffoldETHDeploy, Config {
  error InvalidPrivateKey(string);
  ReFillTokenNative public reFillTokenNative;
  ReFillToken public reFillTokenUSDC; 
  constructor() Config(Network.SCROLL_SEPOLIA) {}

  function run() external {
    uint256 deployerPrivateKey = setupLocalhostEnv();
    if (deployerPrivateKey == 0) {
      revert InvalidPrivateKey(
        "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
      );
    }
    vm.startBroadcast(deployerPrivateKey);

    _deployContract();

    vm.stopBroadcast();
    } 

    function _deployContract() internal {
      console.log("Deploying contract...");
      for (uint i; i < _aaveV3Markets.length; ++i) {
          Markets market = _aaveV3Markets[i];
          MarketData memory marketData = _aaveV3InitMarkets[market];
          if (marketData.isNative) {
              reFillTokenNative = new ReFillTokenNative(
                  marketData.name,
                  marketData.symbol,
                  IERC20(marketData.underlying),
                  IAToken(marketData.aToken),
                  IPool(_lendingPool),
                  IWETHGateway(_wethGateway)
              );
              console.log(
                  "ReFillTokenNative deployed at: ",
                  address(reFillTokenNative)
              );
          } else {
              reFillTokenUSDC = new ReFillToken(
                  marketData.name,
                  marketData.symbol,
                  IERC20(marketData.underlying),
                  IAToken(marketData.aToken),
                  IPool(_lendingPool),
                  IWETHGateway(_wethGateway)
              );
              console.log(
                  "reFillToken deployed at: ",
                  address(reFillTokenUSDC)
              );
          }
    }

    /**
     * This function generates the file containing the contracts Abi definitions.
     * These definitions are used to derive the types needed in the custom scaffold-eth hooks, for example.
     * This function should be called last.
     */
    exportDeployments();
  }

  function test() public { }
}
