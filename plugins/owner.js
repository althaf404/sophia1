const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*owner YᗩՏᗴᗴᑎ - http://Wa.me/+918606869670*\n* *\nð°instagram:- https://www.instagram.com/yasi__yaseen__01 *            *\n*âââââââð±ð±ð±ð±ð±ââââââ*\n\n*â·Creator: YᗩՏᗴᗴᑎ*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\nð¥âOwner YᗩՏᗴᗴᑎâð¥*\n\n*ð https://github.com/goodbad10/sophia1*\n*     *\n follow on Instagram- https://www.instagram.com/yasi__yaseen__01*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*owner YᗩՏᗴᗴᑎ - http://Wa.me/+918606869670*\n* *\nð°instagram:- https://www.instagram.com/yasi__yaseen__01 *            *\n*âââââââð±ð±ð±ð±ð±ââââââ*\n\n*â·Creator: YᗩՏᗴᗴᑎ*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\nð¥âOwner YᗩՏᗴᗴᑎâð¥*\n\n*ð https://github.com/goodbad10/sophia1*\n*     *\n follow on Instagram- https://www.instagram.com/yasi__yaseen__01*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }
