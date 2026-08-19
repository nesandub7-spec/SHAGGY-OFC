const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/nesandub7-spec/SHAGGY-OFC/blob/main/images/WhatsApp%20Image%202026-08-19%20at%201.58.05%20AM.jpeg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 SHAGGY-MD Is Alive Now😍*",
BOT_OWNER: '94786639424',  // Replace with the owner's phone number



};
