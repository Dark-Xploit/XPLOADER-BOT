  //project_name : XPLOADER
// @author : TAKE TEE 
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +23274448130 
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0RYY2FrMUhSRE9JQXVPWUJnY3hxdGhnWityR0NMZmtLWDhrK01GYWEwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUpObS8wcXR3REExUEh0Qk5ob0V5ZzBBK094SXZhbGFMMk5TL1lKREtHVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRUVZZ2VYOE9UbFcwaXBRckc0aTVPRGxUS1h6MWJjT2VnVnpQUFFFUkc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUUFV6N3pqR1FSZXRMR2owM2psWU1PY01NMTg0YVZlaXUxbElqd1d5ZjJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNWUZhZzROZ0ZBVXRGZk1mQjdJZ09DOVZqdi9mWGtQR3BaSjEySjZKRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZvQmxhbVMyV3hxMlJWMEdXTStqSjhzUUp5UjZ6aWZ2TG9PV2MyeERUakU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1B2M1o4bjVGWTh6ZS9mbWJteGcyM0UwSzc2eUhsZ1FiaDdjZEIxRlFHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1BtaDNROVVXd0Y0Nk8wZzBoTjh3WWNxM3BHMVNmWEFVVzAxdk1CdytFMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY4bzdQOXhzY1JIdGhydUpLc3QyQmV2UGlQaWIveUM5eGwxSlk1enBRNmlHVU5FK3lNRThrM2dhZW5ULzJkOGRNWCtRZlAycDhBRFlwTVZqRkVCWGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI1LCJhZHZTZWNyZXRLZXkiOiJQQ3RGU05VRVNEK21nanBaV0NMcG1ueXFhd1RnTTBlUVZUUk55TWMwRGtnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQNnRFMmd3TlNzZXQydDNRWklxcS1nIiwicGhvbmVJZCI6IjFhNDNlZmMzLWE5ODctNDk4MS1hNmUxLWI3MWZmODEwYjZlNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4MEJpWTVZVFN2TFNvZkQyM1JyZ2R3VGRickU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlNmWHIweWo5WWJETHFJU2NWa0dSV3N1Yk9vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik05RThRQ0hIIiwibWUiOnsiaWQiOiIyMzI3NDQ0ODEzMDo0MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNciBUYWtlIFRlZSIsImxpZCI6IjE0MTM1MjAwNDIyNzEwMzo0MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01xRG9kTURFS2FuMXJzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9Yai9LRHNIT2JQODJqZ0RJZmJEbEhRcUYwVnFQSmRzUVI4a091ekdJUUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkQvbThDY2JBbG82dEpBSXBSV2gzaGJueXZCaWM5K1A4b2xSNXlhYm5XYUh3TFNjY0ZCc0FLRDh5VkE1dG9pMHNEbnlUY21xL1lGaGhqMnFYQnZGT0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwTm5DTkh4VFUyTFRUTVV1emtCalVXMnlUMEhVeVp3TkFyQjAxNlVQL0xXLzg4RlU0Qk5hQXhhcTdHeDZiVUVZczN0Ry9tL1BzUG5ESEF4WitBbXhpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMjc0NDQ4MTMwOjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRsNC95ZzdCem16L05vNEF5SDJ3NVIwS2hkRmFqeVhiRUVmSkRyc3hpRUEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU3NTg3NzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHJTIn0=' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || '᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '23274448130'
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'TAKE TEE'
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="

//=================================================//
global.wm = process.env.GL_WM || "©᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "᙭ᑭᒪOᗩᗪᗴᖇ" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "ᗷOT" 
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
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🙂'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '232' 
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
