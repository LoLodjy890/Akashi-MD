//AKASHI
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1BtNEFHUGdTSHNTclJXOENWaGxramh2V0F2MENKRld3NVFya2hTU0ttVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFkzSzB6anc5RnQ3d0ZYWmh1bndXdlNMTTFnRDUrdzNmc0NRSTBoT3pIdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSVcwVmM2RDZMdzJQSkJyMTd6akNXSUN4N3MvWHNYeWJwSjZDRjlLQ0ZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDKzRxVHVLblovMmEzOW1nYW45clJWenlBRzlobzBkTU1PVUxmOVZ5clRVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdBUXdyMjU0akcwMGtlU1h1N1lNWUdoZlExRVNhTzE2Y0xJcitFVFo5RUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFTR3ZwWDM0SWMrc3VKelViOUwvMkRpSGxLdmNWOGtlL2VoTHc2SnNZQjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xPTmQ0bmU0MU9JQWJMcFdJMGlTUFBac1ZMdHJNS095bkFRUTZaSGExST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakxlUFFRT1NZUzZqQ3dybXQ5TXRuSTVaeG9KMi9tbmVQeU94Z3lMd1ZVND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldWSTdjb3E3ZDJSSmMrTkRKUUJqVDZnVDlpNHRUTkdYcGFrUlk1dGk1c2ErVnRmbkoybm16N2JiL0kxQUptZ2p3TFpzUGFlMWhYNWpnVThJTVdmQ0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJaOVBPV1pPVTZpenZmb1dvNG56TXd0R3d5RDUwT2NkcnpGaURpazd2WmdjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMOEpmYng2QVRkR0ZVdVVoNTBGVDZnIiwicGhvbmVJZCI6IjBjZTIwOTk0LTJiZDgtNDdhMC05ODZiLWUyZmQ3OWQ1OWViOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3WEJqUjY1NHJJMVFaYUdmSkZMZDV2YWpRTzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFRuUDRGTkxvQnpjOGVGQXgvcXhZTWZ0UUNvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZNU1dLQTRWIiwibWUiOnsiaWQiOiI1MDkzMjUzOTUwOTozNUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkNFKzZJR0VLV1cwTGNHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZmlNWjNaS2pPVjJjcnpPRnZ6VFlNaVdyZHh4VTZKMnlJRk1SR0NFSWZqQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMGcyT01VMTZNdXJsOUVjYmxUNnRISUJXdGVhRFpBekFHYnU3eGU1SlJYdlV4MjlXS3ZHeEdDN2pxeXU3V0ViMW1jd2k0TXFla24xNDU4WU9Nb3lpQlE9PSIsImRldmljZVNpZ25hdHVyZSI6InhRWDNkQXlUUEFFdzVSNGtCYmNqUldESEJQNDVWWXFOSzlKUHJYZGxMS2hiYjAxcTBpUUZTVzNsMUZ1M1h1aHRQL0x6eDErQlNvU3g3cVRzOXN4ckJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzI1Mzk1MDk6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDRqR2QyU296bGRuSzh6aGI4MDJESWxxM2NjVk9pZHNpQlRFUmdoQ0g0dyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzI2OTY4Mn0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "50932539509";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "50932539509";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||"https://telegra.ph/file/6deb3281f66b574e3264e.jpg"
  process.env.IMAGE ||
  "https://telegra.ph/file/6deb3281f66b574e3264e.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/6deb3281f66b574e3264e.jpg,https://telegra.ph/file/6deb3281f66b574e3264e.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".,!,☄",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©♕𝙇𝙊𝙇𝙊𝘿𝙅𝙔☘𓆤𐂊︎-𝙈𝘿`",
  author: process.env.PACK_AUTHER || "♕𝙇𝙊𝙇𝙊𝘿𝙅𝙔☘𓆤𐂊︎",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "🦋𝘽𝙊𝙐𝘽𝙊𝙐𝙉𝙀 𝙍Ò𝙕 𝙈𝘿☂",
  ownername: process.env.OWNER_NAME || "♕𝙇𝙊𝙇𝙊𝘿𝙅𝙔☘𓆤𐂊︎",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "lubinlowens59@gmail.com";
global.location = "Africa,france,Haïti";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala/Haïti";
global.github = process.env.GITHUB || "https://github.com/AKASHI-SASAKI/Akashi-MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "50932539509";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://sasaki-akashi-session.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
