const Discord = require('discord.js');
const config = require('../../config.json');
const prefix = config.configs.prefix

module.exports = {
    name: 'regras',
    aliases: ['tutorial'],
    description: 'Veja o tutorial e regras de jogo para aprender a jogar.',
    usage: `${prefix}regras`,

    async run(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle('Cadeira')
            .setDescription('Jogo de palavras baseado no famoso *shiritori*!\nRegras:')
            .setAuthor(`Pedido por ${message.author.username}`, message.author.displayAvatarURL())
            .setFields(
                {
                    name: 'Princípios:',
                    value: 'O jogo é iniciado quando, pelo menos, 3 jogadores se inscrevem. Daí, uma rodada se inicia quando eu enviar uma palavra aleatória.'
                },
                {
                    name: 'Rodadas:',
                    value: 'As rodadas não têm tempo limite, porém, possuem limite de pontuação. Além disso, um jogador pode entrar em uma rodada em progresso.'
                },
                {
                    name: 'Turnos:',
                    value: 'À princípio, os turnos são decididos em ordem alfabética. Quando um jogador entra, ele também passa pela organização em ordem alfabética.'
                },
                {
                    name: 'Teste:',
                    value: 'testando'
                },
            )
        message.channel.send({ embeds: [embed] });
    }
}