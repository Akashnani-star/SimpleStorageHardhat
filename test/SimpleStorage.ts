import { assert, expect } from "chai"
import { ethers } from "hardhat"
import { SimpleStorage } from "../typechain-types/SimpleStorage"
import { SimpleStorage__factory } from "../typechain-types/factories/SimpleStorage__factory"

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = (await ethers.getContractFactory(
            "SimpleStorage"
        )) as SimpleStorage__factory
        simpleStorage = (await simpleStorageFactory.deploy()) as SimpleStorage
    })
    it("Should start with fav number 0", async function () {
        assert.equal((await simpleStorage.retrieve()).toString(), "0")
    })
    it("Should it update fav number to 33", async function () {
        const transactionResponse = await simpleStorage.modifyFavNumber(33)
        transactionResponse.wait(1)
        assert.equal((await simpleStorage.retrieve()).toString(), "33")
        expect((await simpleStorage.retrieve()).toString()).to.equal("33")
    })
})
