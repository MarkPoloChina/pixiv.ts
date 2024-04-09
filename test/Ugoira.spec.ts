import {assert} from "chai"
import "mocha"
import login, {pixiv} from "./login"

describe("Ugoira", async function() {
    this.beforeAll(async function() {
        await login()
    })

    it("should get metadata", async function() {
        const response = await pixiv.ugoira.metadata({illust_id: 83088330})
        assert(response.ugoira_metadata.hasOwnProperty("frames"))
    })

})
