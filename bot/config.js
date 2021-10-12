const logger = require('./helpers/logger')
require('dotenv').config({path:'./bot/.env'})

const BOT_TOKEN = process.env.BOT_TOKEN 
const GENIUS = process.env.GENIUS
const CHANNEL_ID = process.env.CHANNEL_ID
const URL = process.env.URL
const USERNAME = process.env.USERNAME
const DETAKEY = process.env.DETAKEY

const config = {
  bot: BOT_TOKEN ? BOT_TOKEN : logger.error(`BOT_TOKEN undefined!`),
  genius: GENIUS ? GENIUS : logger.error(`GENIUS TOKEN undefined!`) ,
  channel: CHANNEL_ID ? CHANNEL_ID : logger.error(`CHANNEL_ID undefined`),
  deta: DETAKEY ? DETAKEY : logger.error(`DETAKEY undefiend`),
  web: URL,
  port: 3000, // Don't change if ya don't know about those things
  username: USERNAME ? USERNAME : logger.info('Skipping website deployment!')
}

if (BOT_TOKEN === undefined){
  logger.error('BOT_TOKEN is undefined! Exiting now')
  process.exit(1)
}else if(GENIUS === undefined){
  logger.error('GENIUS TOKEN is undefined! Exiting now')
  process.exit(1)
}else if(CHANNEL_ID === undefined){
  logger.error('CHANNEL_ID is undefined! Exiting now')
  process.exit(1)
}else if(DETAKEY === undefined){
  logger.error('DETAKEY is undefined! Exiting now')
  process.exit(1)
}

module.exports = config
