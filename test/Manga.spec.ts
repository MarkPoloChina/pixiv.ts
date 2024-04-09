import {assert} from "chai"
import "mocha"
import login, {pixiv} from "./login"

describe("Manga", async function() {
    this.beforeAll(async function() {
        await login()
    })

    it("should get new manga", async function() {
        const response = await pixiv.manga.new()
        assert(response?.[0].hasOwnProperty("title"))
    })

    it("should get recommended manga", async function() {
        const response = await pixiv.manga.recommended()
        assert(response?.[0].hasOwnProperty("title"))
    })
})
