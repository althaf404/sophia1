const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*owner goodbad10 - http://Wa.me/+91 80890 69670*\n* *\n🔰instagram:- https://www.instagram.com/yasi-yaseen-01_ *            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Althaf Rahman*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Owner 𝑔𝑜𝑜𝑑𝑏𝑎𝑑10═💥*\n\n*💘 https://github.com/𝑦𝑎𝑠𝑖-𝑦𝑎𝑠𝑒𝑒𝑛-01/v4*\n*     *\n follow on Instagram- https://www.instagram.com/althaf404_*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*owner goodbad10 - http://Wa.me/+91 80890 69670*\n* *\n🔰instagram:- https://www.instagram.com/yasi-yaseen-01 *            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Althaf Rahman*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Owner godbad10═💥*\n\n*💘 https://github.com/yasi-yaseen-01/v4*\n*     *\n follow on Instagram- https://www.instagram.com/althaf404_*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }
