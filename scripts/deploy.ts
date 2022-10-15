import { ethers, run, network } from "hardhat"
import "dotenv/config"
import { SimpleStorage } from "../typechain-types/SimpleStorage"
import { SimpleStorage__factory } from "../typechain-types/factories/SimpleStorage__factory"

async function main() {
    const SimpleStorageFactory = (await ethers.getContractFactory(
        "SimpleStorage"
    )) as SimpleStorage__factory
    console.log("Deploying...")
    const simpleStorage = (await SimpleStorageFactory.deploy()) as SimpleStorage
    await simpleStorage.deployed()
    console.log(`Address : ${simpleStorage.address}`)
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.deployTransaction.wait(6)
        await verify(simpleStorage.address, [])
    }
    const currentValue = await simpleStorage.retrieve()
    console.log(`current value ${currentValue}`)

    const transactionResponse = await simpleStorage.modifyFavNumber(55)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`updated value ${updatedValue}`)
}

async function verify(contractAddress, args) {
    console.log("verifying contract")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("verified already")
        } else {
            console.log(e)
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
