const Discord = require('discord.js');
const config = require('../config.json');
const prefix = config.configs.prefix

module.exports = {
    name: 'ajuda',
    aliases: ['help', 'comandos'],
    description: 'Lista os comandos e ensina a utilizar comandos específicos.',
    usage: `${prefix}ajuda <comando/categoria>`,

    async run(client, message, args, cmds) {
        const cmdsList = Object.entries(cmds);
        const categories = [];
        cmdsList.forEach(cmd => {
            const ctg = cmd[1].category;
            if (ctg === 'alias') return;
            const name = cmd[1].info.name;
            const aliases = cmd[1].info.aliases;
            if (!name) return;
            if (categories.find(c => c.name === ctg) === undefined) {
                categories.push({
                    name: ctg, commands: []
                })
            }
            categories.find(c => c.name === ctg).commands.push({ name, aliases });
        })
        // const categories = cmdsList.reduce(function (result, el) {
        //     console.log(result);
        //     if (!result[el[1].category]) {
        //         result[el[1].category] = {
        //             name: el[1].category,
        //             commands: []
        //         }
        //     }
        //     console.log(el[0]);
        //     result[el[1].category].commands.push(el[0])
        //     return result;
        // }, []);

        let embed;
        if (true) {
            embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle('Cadeira')
                .setDescription('Jogo de palavras baseado no famoso *shiritori*:')
                .setAuthor(`Pedido por ${message.author.username}`, message.author.displayAvatarURL())
                .addField('Regras do jogo:')
            categories.map(category => {
                const description = category.commands.map(cmd => {
                    return `${cmd.name} - [${cmd.aliases.join(', ')}]`;
                })
                console.log(description);
                embed.addField(category.name, description.join('\n'))
                // GERAL
                // Categoria
                // comando1 - [apelido, apelido, apelido]
                // comando2 - [apelido, apelido, apelido]

                // CATEGORIA
                // Categoria:
                // comando1:
                // alternativas: [apelido, apelido, apelido]
                // descrição: blá blá blá

                // COMANDO
                // Comando:
                // alternativas: [apelido, apelido, apelido]
                // descrição: blá blá blá
                // uso: ?comando <argumentos>
            })
        }
        // else if () {

        // }
        message.channel.send({ embeds: [embed] });
    }
}