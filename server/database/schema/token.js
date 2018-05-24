// const mongoose = require('mongoose')

// const Schema = mongoose.Schema
// const tokenSchema = new mongoose.Schema({
//     name: String,
//     token: String,
//     expires_in: Number,
//     meta: {
//         createdAt: {
//             type: Date,
//             default: Date.now()
//         },
//         updatedAt: {
//             type: Date,
//             default: Date.now()
//         }
//     }
// }) 

// tokenSchema.pre('save', function(next){
//     if (this.isNew) {
//         this.meta.createdAt = this.meta.updatedAt = Date.now()
//     }else {
//         this.meta.updatedAt = Date.now()
//     }
//     next()
// })
// tokenSchema.statics = {
//     async getAccessToken() {
//         let token = await this.findOne({
//             name: 'access_token'
//         }).exec()
//         if(token && token.token) {
//             token.access_token = token.token
//         }
//         return token
//     },
//     async saveAccessToken(data) {
//         let token = await this.findOne({
//             name: 'access_token'
//         }).exec()// 2
//         if (token) {
//             // console.log(22)
//             token.token = data.access_token
//             token.expires_in = data.expires_in
//         }else {
//             console.log(222)
//             token = new Token({
//                 name: 'access_token',
//                 token: data.access_token,
//                 expires_in: data.expires_in
//             })
            
//         }
//         console.log(token)
//          await token.save()
//         return data
//     }

// }
// // console.log(1);
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TokenSchema = new mongoose.Schema({
  name: String,
  token: String,
  expires_in: Number,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

TokenSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }

  next()
})

TokenSchema.statics = {
  async getAccessToken () {
    const token = await this.findOne({ name: 'access_token' }).exec()
    if(token && token.token) {
        token.access_token = token.token
    }
    return token
  },

  async saveAccessToken (data) {
    let token = await this.findOne({ name: 'access_token' }).exec()
    if (token) {
      token.access_token = token.token= data.access_token
      token.expires_in = data.expires_in
    } else {
      token = new Token({
        name: 'access_token',
        expires_in: data.expires_in,
        token: data.access_token
      })
    }
    console.log(token)
    try {
      await token.save()
    } catch (e) {
      console.log('存储失败')
      console.log(e)
    }

    return data
  }
}

export const Token = mongoose.model('Token', TokenSchema)
//   console.log(Token)