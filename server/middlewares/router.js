import Router from 'koa-router'
import reply from '../wechat/reply'
import config from '../config'
import wechatMiddle from '../wechat-lib/middleware'
export const router = app => {
    const router = new Router()

    router.all('/wechat-hear', wechatMiddle(config.wechat, reply))
    app.use(router.routes())
    app.use(router.allowedMethods())
}