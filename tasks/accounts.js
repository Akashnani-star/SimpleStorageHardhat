const { task } = require("hardhat/config")

task("accounts", "Get all accounts").setAction(async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()
    for (const account of accounts) {
        await printAccountDetails(account)
    }
})

async function printAccountDetails(account) {
    console.log(`Account Address ${account.address}`)
    console.log(`Account Balance ${await account.getBalance()}\n`)
}

module.exports = {}
