/***
 * 
 * autodelete bot
 * 
 * created 22 mar 2024
 * last updated 29 mar 2024
 * 
 * this discord bot automatically deletes messages after a specified time in seconds.
 * the time to autodelete is set with the slash command /setdeletetime
 * once a time is set, any messages sent will be deleted that many seconds after they were sent.
 * to prevent a message from being deleted, include '[keep]' in the message.
 * 
 * see README file for more information
 * 
***/


import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as setDeleteTime from './commands/setDeleteTime.js';
import * as autodelete from './commands/autodelete.js';

// Call the config() function on dotenv to load the environmental vars from the .env file
config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
        // GatewayIntentBits.GuildMessageReactions,    // prob dont need
        // GatewayIntentBits.DirectMessages    // prob dont need
    ],
});


function readyDiscord() {
    console.log(`${client.user.tag} is online.`);
}


var deleteTime;
var on = false;
// slash command takes delete time in seconds so calculates milliseconds on variable assignment
async function handleCommands(interaction) {
    if (!interaction.isCommand()) return;

    switch(interaction.commandName) {
        case 'setdeletetime':
            deleteTime = await setDeleteTime.execute(interaction) * 1000;
            break;

        case 'autodelete':
            on = await autodelete.execute(interaction);
            break;
    }
}


function autoDeleteMessage(message) {
    if (message.content.toLowerCase().includes('[keep]')) return;
    if (!on) return;
    if (message.author.bot) return;
    setTimeout(() => message.delete(), deleteTime);
}


client.once(Events.ClientReady, readyDiscord);
client.login(process.env.TOKEN);
client.on(Events.InteractionCreate, handleCommands);
client.on(Events.MessageCreate, autoDeleteMessage);



/************************* TODO: *************************
 * 
 * - turn off autodelete/turn on only in certain channels
 * - different times for different channels
 * - command to ask what current autodelete time is
 * - message sent to server when bot first comes online
 * 
 *********************************************************/



