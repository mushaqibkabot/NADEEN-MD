const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "YsYlRQaa#heVle58By3R4QweJmw8AdzaAAd8wFawfToUY8mKvfcE", //put your session id
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
MODE: process.env.MODE || "public", //private or public
STATUES_REPLY: process.env.STATUES_REPLY || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO, //ADD YOUR NUMBER
INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
AUTO_VOICE:"true" //true or false
};
