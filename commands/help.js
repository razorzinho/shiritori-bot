const Discord = require('discord.js');
const config = require('../config.json');
const prefix = config.configs.prefix

module.exports = {
    name = 'help',
    aliases = ['ajuda', 'comandos', 'tutorial'],
    description = 'Lista os comandos e ensina a utilizar comandos específicos.',

    async run(client, message, args) {
        if (!args) {
        const help = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Ajuda: nome_genérico_de_bot")
        .setDescription(`Use sempre os comandos com o prefixo ${prefix} no início.\nPor exemplo: \`${prefix}regras\``)
        .setAuthor('Lista de comandos:', message.author.displayAvatarURL())
        .setFooter(`Use ${prefix}help *comando* para obter informações mais aprofundadas de um comando específico. | `)

        .addFields({
            name: 'Jogo',
            for (command) {
            value: ''
            }
        })
        }
    }
}