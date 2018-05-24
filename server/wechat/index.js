import mongoose from 'mongoose'
import config from '../config/index.js'
import wechat from '../wechat-lib/index.js'
import Token from '../database/schema/token.js'

const Token1 = mongoose.model('Token')
const wechatConfig = {
    wechat: {
        appID: config.wechat.appID,
        appSecret: config.wechat.appSecret,
        token: config.wechat.token,
        getAccessToken: async () => {
            await Token1.getAccessToken()
        },
        saveAccessToken: async (data) => {
            await Token1.saveAccessToken(data)
        }
    }
}
export const getWechat = () => {
    const wechatClient = new wechat(wechatConfig.wechat)
    return wechatClient
}

getWechat()