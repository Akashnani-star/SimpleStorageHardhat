const { assert, expect } = require("chai")
const { ethers } = require("hardhat")

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
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
