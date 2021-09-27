const { Client } = require('discord.js');
var json = require('./config.json');
require('dotenv').config();

const prefix = json.configs.prefix;
const intents = json.configs.intents;

const client = new Client({ intents });

client.on('message', async (message) => {
    if (message.author.client) return;
    if (message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;
    }
});

client.once('ready', () => {
    console.log('Estou on-line!');
})

client.login(process.env.TOKEN)
