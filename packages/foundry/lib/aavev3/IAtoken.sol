interface IAToken {
    function balanceOf(address account) external view returns (uint256);

    function scaledBalanceOf(address user) external view returns (uint256);
}
