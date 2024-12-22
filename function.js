
const { proto, delay, getContentType } = require('@whiskeysockets/baileys')
const chalk = require('chalk')
const axios = require('axios');
const { sizeFormatter } = require('human-readable');
const fs = require("fs");

exports.color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)

}
exports.getGroupAdmins = (participants) => {
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins || []
     }
exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

exports.bytesToSize = (bytes, decimals = 2) => {
if (bytes === 0) return '0 Bytes';
const k = 1024;
const dm = decimals < 0 ? 0 : decimals;
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const i = Math.floor(Math.log(bytes) / Math.log(k));
return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

exports.checkBandwidth = async () => {
let ind = 0;
let out = 0;
for (let i of await require("node-os-utils").netstat.stats()) {
ind += parseInt(i.inputBytes);
out += parseInt(i.outputBytes);
}
return {
download: exports.bytesToSize(ind),
upload: exports.bytesToSize(out),
};
};

exports.formatSize = (bytes) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return '0 Bytes';
const i = Math.floor(Math.log(bytes) / Math.log(1024));
return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
};

exports.getBuffer = async (url, options) => {
try {
options = options || {};
const res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
});
return res.data;
} catch (err) {
return err;
}
};

exports.isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
};

exports.jsonformat = (string) => {
return JSON.stringify(string, null, 2);
};

exports.nganuin = async (url, options) => {
try {
options = options || {};
const res = await axios({
method: 'GET',
url: url,
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
},
...options
});
return res.data;
} catch (err) {
return err;
}
};

exports.pickRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`;
};

exports.runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.shorturl = async function shorturl(longUrl) {
try {
const data = { url: longUrl };
const response = await axios.post('https://shrtrl.vercel.app/', data);
return response.data.data.shortUrl;
} catch (error) {
return error;
}
};

exports.formatp = sizeFormatter({
std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`
});

exports.smsg = (Xploader, m, store) => {
    try {
if (!m) return m;
let M = proto.WebMessageInfo;
if (m.key) {
m.id = m.key.id;
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16;
m.chat = m.key.remoteJid;
m.fromMe = m.key.fromMe;
m.isGroup = m.chat.endsWith('@g.us');
m.sender = Xploader.decodeJid(m.fromMe && Xploader.user.id || m.participant || m.key.participant || m.chat || '');
if (m.isGroup) m.participant = Xploader.decodeJid(m.key.participant) || '';
}
if (m.message) {
m.mtype = getContentType(m.message);
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype]);
m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text;
let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null;
m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
if (m.msg.caption) {
m.caption = m.msg.caption;
}
if (m.quoted) {
let type = Object.keys(m.quoted)[0];
m.quoted = m.quoted[type];
if (['productMessage'].includes(type)) {
type = Object.keys(m.quoted)[0];
m.quoted = m.quoted[type];
}
if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
};
m.quoted.mtype = type;
m.quoted.id = m.msg.contextInfo.stanzaId;
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat;
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false;
m.quoted.sender = Xploader.decodeJid(m.msg.contextInfo.participant);
m.quoted.fromMe = m.quoted.sender === Xploader.decodeJid(Xploader.user.id);
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || '';
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false;
let q = await store.loadMessage(m.chat, m.quoted.id, Xploader);
return smsg(Xploader, q, store);
};
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
});
m.quoted.delete = () => Xploader.sendMessage(m.quoted.chat, { delete: vM.key });
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => Xploader.copyNForward(jid, vM, forceForward, options);
m.quoted.download = () => Xploader.downloadMediaMessage(m.quoted);
}
}
if (m.msg.url) m.download = () => Xploader.downloadMediaMessage(m.msg);
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || '';
m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? Xploader.sendMedia(chatId, text, 'file', '', m, { ...options }) : Xploader.sendText(chatId, text, m, { ...options });
m.copy = () => smsg(Xploader, M.fromObject(M.toObject(m)));
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => Xploader.copyNForward(jid, m, forceForward, options);
Xploader.appenTextMessage = async(text, chatUpdate) => {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: Xploader.user.id,
quoted: m.quoted && m.quoted.fakeObj
});
messages.key.fromMe = areJidsSameUser(m.sender, Xploader.user.id);
messages.key.id = m.key.id;
messages.pushName = m.pushName;
if (m.isGroup) messages.participant = m.sender;
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
};
Xploader.ev.emit('messages.upsert', msg);
};

return m;
        } catch (e) {
            
        }
};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Updated ${__filename}`))
delete require.cache[file]
require(file)
})
