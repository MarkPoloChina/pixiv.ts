import Pixiv from "./pixiv"

require("dotenv").config();
(async () => {
    const pixiv = await Pixiv.refreshLogin(process.env.REFRESH_TOKEN)
    let illusts = await pixiv.search.illusts({word: "cute"})
    console.log(illusts)
})()
