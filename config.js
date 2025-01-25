const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZpgzCRRD#Yhrh0Lf1R9y64zZmYQtZsF5QmAh1wJbkUVDHed651Rg", //put your session id
MODE: process.env.MODE || "private", //private | public | groups | inbox
STATUES_REPLY: process.env.STATUES_REPLY || "false", //true or false
AUTO_REACT: process.env.AUTO_REACT || "true", //true or false
ANTI_DELETE: process.env.ANTI_DELETE || "true", //true or false 
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '2520907027756' : process.env.DELETEMSGSENDTO, //ADD YOUR NUMBER
INBOX_BLOCK: process.env.INBOX_BLOCK || "false", //true or false
READ_MESSAGE: process.env.READ_MESSAGE || "false", //true or false
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true", //true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //true or false
AUTO_TYPING: process.env.AUTO_TYPING || "true", //true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //true or false
AUTO_VOICE:"true" //true or false
};
