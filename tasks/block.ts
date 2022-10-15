import { task } from "hardhat/config"

task("block-number", "print current block number").setAction(
    async (taskArgs, hre) => {
        console.log(`Block : ${await hre.ethers.provider.getBlockNumber()}`)
    }
)

module.exports = {}
