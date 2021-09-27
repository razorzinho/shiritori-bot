const Discord = require('discord.js');
const config = require('../../config.json');
const prefix = config.configs.prefix

module.exports = {
    name = 'regras',
    aliases = ['tutorial'],
    description = 'Veja o tutorial e regras de jogo para aprender a jogar.',
    usage = `${prefix}regras`,

    async run(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(nome_jogo)
            .setDescription(descricao_jogo)
            .setAuthor(message.author.DisplayAvatarURL())
            .setFields({
                name: '',
                value: ''
            },
            {
                name: '',
                value: ''
            })
    }
}