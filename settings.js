  //project_name : XPLOADER
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : heyit-tylor
// @tiktok : heyits_tylor
// @whatsapp : +254754783972
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'QUEENELISA;;;==wcsJ1cDVmWKZGVOZFULxERFpHOslHMjN2d0lTN4hUa4lEVyZWaygXezRkajoFRChFRs50dpwd=68282381749' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || '𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '254754783972' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || '+94718328286' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="

//=================================================//
global.wm = process.env.GL_WM || "©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "Xploader" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "Bot" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || ""
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'public';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'false'

//=================================================//
global.autostatusreact = process.env.AUTO_STATUS_REACT || 'false'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🧡'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '254' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'false';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
