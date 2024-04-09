import {assert} from "chai"
import "mocha"
import login, {pixiv} from "./login"

/*
Removed:
commentReplies
recommendedNoLogin
myPixiv
*/

describe("Novel", async function() {
    this.beforeAll(async function() {
        await login()
    })

    it("should get novel text", async function() {
        const response = await pixiv.novel.text({novel_id: 11826198})
        assert(response.hasOwnProperty("novel_text"))
    })

    it("should get bookmark detail", async function() {
        const response = await pixiv.novel.bookmarkDetail({novel_id: 11826198})
        assert(response.hasOwnProperty("bookmark_detail"))
    })

    it("should get bookmark ranges", async function() {
        const response = await pixiv.novel.bookmarkRanges({word: "cute"})
        assert(response.hasOwnProperty("bookmark_ranges"))
    })

    it("should get bookmark comments", async function() {
        const response = await pixiv.novel.comments({novel_id: 11826198})
        assert(response.hasOwnProperty("comments"))
    })

    it("should get bookmark comments v2", async function() {
        const response = await pixiv.novel.commentsV2({novel_id: 11826198})
        assert(response.hasOwnProperty("comments"))
    })

    it("should get follow", async function() {
        const response = await pixiv.novel.follow()
        assert(response?.[0].hasOwnProperty("title"))
    })

    it("should get new novels", async function() {
        const response = await pixiv.novel.new()
        assert(response?.[0].hasOwnProperty("title"))
    })

    it("should get popular preview", async function() {
        const response = await pixiv.novel.popularPreview({word: "kawaii"})
        assert(response?.[0].hasOwnProperty("title"))
    })

    it("should get novel ranking", async function() {
        const response = await pixiv.novel.ranking()
        assert(response?.[0].hasOwnProperty("title"))
    })

    it("should get recommended novels", async function() {
        const response = await pixiv.novel.recommended()
        assert(response?.[0].hasOwnProperty("title"))
    })

    it("should get series", async function() {
        const response = await pixiv.novel.series({series_id: 1191447})
        assert(response?.[0].hasOwnProperty("title"))
    })

    it("should get trend tags", async function() {
        const response = await pixiv.novel.trendingTags()
        assert(response.hasOwnProperty("trend_tags"))
    })
})
