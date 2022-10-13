const { task } = require("hardhat/config")

task("block-number", "print current block number").setAction(
    async (taskArgs, hre) => {
        console.log(`Block : ${await hre.ethers.provider.getBlockNumber()}`)
    }
)

module.exports = {}
