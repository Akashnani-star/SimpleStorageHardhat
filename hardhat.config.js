require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("./tasks/block")
require("./tasks/accounts")
require("hardhat-gas-reporter")
require("solidity-coverage")

const LOCALHOST_RPC_URL = process.env.LOCALHOST_RPC_URL

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "localhost",
    networks: {
        localhost: {
            url: LOCALHOST_RPC_URL,
            // accounts: []
            chainId: 31337,
        },
    },
    solidity: "0.8.17",
    // etherscan:{
    //   apiKey: ETHERSCAN_API_KEY
    // }
    gasReporter: {
        enabled: true,
        outputFile: "gasReport.txt",
        noColors: true,
    },
}
