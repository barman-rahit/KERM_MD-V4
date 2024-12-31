const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "mAJ0kADL#FqwZ3kiQ_3W0bfOMwQ55czXzY5sClbOcvFwryweOaKI",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/osriwc.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HI DEAR IM ONLINE I'M KERM_MD-V4 WHATSAPP BOT\n\n> 𝖡𝖸 𝖪𝖦𝖳𝖤𝖢𝖧",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
FAKE_TYPING: process.env.FAKE_TYPING || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
HEART_REACT: process.env.HEART_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "𝗕𝗮𝗯𝘂    𝐑ꪮꫝιt",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
AUTO_LIKE_REACT: process.evn.AUTO_LIKE_REACT || "true",
