const { Client } = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const prefix = config.configs.prefix;
const intents = config.configs.intents;

const client = new Client({ intents });

const commands = {};

const newCommand = (n, p, category) => {
    if (path.extname(n) == '.js') {
        const name = n.slice(0, -3);
        const command = require('./' + p + '/' + n);
        commands[name] = {
            category,
            info: command,
            code: command.run
        }
        delete commands[name].info.run;
        const newName = commands[name].info.name;
        if (name !== newName) {
            Object.defineProperty(commands, newName,
                Object.getOwnPropertyDescriptor(commands, name));
            delete commands[name];
        }
        const aliases = commands[newName].info.aliases;
        if (aliases) {
            aliases.map(alias => {
                commands[alias] = {
                    category: 'alias',
                    target: newName
                }
            })
        }
    }
}

const generateCommands = (p = 'commands', category = 'global') => {
    fs.readdir(__dirname + '/' + p, { withFileTypes: true }, (err, items) => {
        items.forEach(item => {
            if (item.isFile()) {
                newCommand(item.name, p, category);
            }
            if (item.isDirectory()) {
                generateCommands(`${p}/${item.name}`, item.name);
            }
        })
    })
}

generateCommands();

client.on('messageCreate', async (message) => {
    if (message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift();
        try {
            message.reply(`Comando \`${command}\` chamado.`)
            const selectedCommand = commands[command];
            if (selectedCommand) {
                const target = selectedCommand.category === 'alias' ? commands[selectedCommand.target] : selectedCommand;
                commandName = target.info.name;

                target.code(client, message, args, commandName === 'ajuda' && commands);
            } else {
                message.reply(`Comando \`${command}\` não encontrado!`);
            }
        } catch (e) {
            console.log(e)
        }
    }
});

client.once('ready', () => {
    console.log(`${client.user.username} on-line!`);
    // console.log(commands);
    Object.keys(commands).forEach(key => console.log(key));
})

client.login(process.env.TOKEN)