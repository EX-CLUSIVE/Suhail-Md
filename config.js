const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/message/E3WLNO4GSPOHA1";
global.website=process.env.GURL || "https://wa.me/message/E3WLNO4GSPOHA1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348162195613";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_45_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTksXG4gICAgICAgIDM5LFxuICAgICAgICA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjd1M1dWZWdzTHZpcG5ESHBvdGlSSC9JK1R5R2dzZlQ5NlR5V3RxMVhqblk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFyT3VPNXF5VER5X3ZTSjlWbF9UVGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2Y0MWYxMzItNDgxZS00NmNmLTg2MDItZGFmMGNlODM0MzdmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDE4NixcbiAgICAgIDExMCxcbiAgICAgIDEwMCxcbiAgICAgIDMzLFxuICAgICAgMjEyLFxuICAgICAgOTgsXG4gICAgICAxODUsXG4gICAgICAzOSxcbiAgICAgIDgzLFxuICAgICAgMjUwLFxuICAgICAgNTEsXG4gICAgICAyMjksXG4gICAgICAyMDgsXG4gICAgICAzNCxcbiAgICAgIDExMixcbiAgICAgIDQ4LFxuICAgICAgMjQzLFxuICAgICAgMTEwLFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgOCxcbiAgICAgIDQ1LFxuICAgICAgMTY4LFxuICAgICAgMjMwLFxuICAgICAgMTIwLFxuICAgICAgMjI3LFxuICAgICAgMTA0LFxuICAgICAgMTA3LFxuICAgICAgMTcxLFxuICAgICAgMTgzLFxuICAgICAgMTAzLFxuICAgICAgMTA0LFxuICAgICAgMTUzLFxuICAgICAgMjA0LFxuICAgICAgMjA2LFxuICAgICAgNTYsXG4gICAgICAxMDIsXG4gICAgICAyMzUsXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1cxSlFINFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDM1NDQyNTI6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZC/8J2RnPCdkaTwnZGY8J2RkvCdkaYg8J2Rg/CdkY7wnZGP4oCZ8J2RoCDwnZGk8J2RjvCdkabwnZGgICgg8J2Qi/CdkI/wnZCWIClcIixcbiAgICBcImxpZFwiOiBcIjI0NzUyMTE0Njc1OTAwOjQ1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tyTmhPSURFTE9vcTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZEtKc1JhRkVRc2Z5L2tFbFh0YkpBMW94QjA4cklRbkxDVlRZaGZsa1NSST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwb0FiYmdhckhkeDZHRmo3WVViQVorMGh2NFRZTGF2MUxIMDd4Y3V5OEYyczIxZ09DR21tK29rZnl6UDlURWRUeFg3aXA1cGkwSUJhL2Z4dzJBVXFqQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoT1JMaWhoRUpkU3VNdVdGNHVmcnJXZnJzeTJDNlZaZmxjanlxSnlKdGxWNzc1YUhnMGx4UXZtWHJRcXBuTytzbVBEMFJFUXJVOGRxdzlxMVFIR3BnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQzNTQ0MjUyOjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNzQzMjhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "garri-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "garri",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  
