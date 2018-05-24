const tip = 'nnnnnnnnnnnnnnnnn'
export default async (ctx, next) => {
    console.log(ctx.weixin)
    ctx.body = tip
}