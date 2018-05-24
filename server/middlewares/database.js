import mongoose from 'mongoose'
import config from '../config'
import fs from 'fs'
import {resolve} from 'path'
mongoose.set('debug',true)
const models = resolve(__dirname, '../database/schema')
fs.readdirSync(models)
.filter(file => {~file.search(/^[^\.].*js$/)// 1
  })
.forEach(file => {
    require(resolve(models, file))
})

export const database = app =>{
    mongoose.set('debug', true)
    mongoose.connect(config.db)
    mongoose.connection.on('disconnected', () => {
        mongoose.connect(config.db)
        console.log(3)
    })
    mongoose.connection.on('error', (err) => {
        console.log(err)
        console.log(2)
    })
    mongoose.connection.on('open', async => {
        console.log('connect')
        console.log(1)
    })
}

