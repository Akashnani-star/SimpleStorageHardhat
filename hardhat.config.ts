import "@nomicfoundation/hardhat-toolbox"
import "dotenv/config"
import "./tasks/block"
import "./tasks/accounts"
import "hardhat-gas-reporter"
import "solidity-coverage"

const LOCALHOST_RPC_URL = process.env.LOCALHOST_RPC_URL
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "localhost",
    networks: {
        localhost: {
            url: LOCALHOST_RPC_URL,
            // accounts: []
            chainId: 31337,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            chainId: 5,
            accounts: [GOERLI_PRIVATE_KEY],
        },
    },
    solidity: "0.8.17",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gasReport.txt",
        noColors: true,
    },
}
