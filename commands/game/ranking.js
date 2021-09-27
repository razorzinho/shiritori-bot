const Discord = require('discord.js');
const config = require('../../config.json');
const ranking = require('./ranking.json');
const prefix = config.configs.prefix

module.exports = {
    name = 'rank',
    aliases = ['placar'],
    description = 'Exibe o placar de jogadores que participam do jogo. Se especificar um usuário, exibirá informações mais específicas do usuário, se não, exibirá informações de todos os jogadores.',
    usage = `${prefix}rank [@usuário]`,

    async run(client, message, args) {
        
    }
}