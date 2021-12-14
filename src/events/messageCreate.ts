const desacentuar = require('desacentuador')
import colors from '../cogs/colors'
export = {
  execute: (message: any, tokyo: any) => {
    const prefix = "tk."
    /* barrar algumas situações */
    //console.log(message.member.guild)
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member) return;
    /* finalmente operar: 
    1. responder menção */
    if (message.content === "<@!920072004357472291>" ||
      message.content === "<@920072004357472291>") {
      tokyo.createMessage(message.channel.id, {
        content: message.author.mention,
        embed: {
          title: '**Tokyo™** » Guia rápido:',
          description: '✨ » Para falar comigo, use o prefixo: **`tk.`**\
          \n☝️ » **Precisa de ajuda?** Use: **`tk.ajuda`**',
          color: colors["default"],
          footer: {
            text: 'Obrigada por me utilizar!'
          }
        }
      })
    }
    /* 2. operar comandos: */
    if (!message.content.startsWith(prefix)) return
    const args = message.content
      .split(" ")
      .slice(1)
    const cmdStr = message.content
      .toLowerCase()
      .split(" ")[0]
    const cmd = desacentuar(cmdStr.slice(prefix.length))
    if (cmd.length == 0) return
    let command = tokyo.commands.get(tokyo.aliases.get(cmd)) || tokyo.commands.get(cmd);
    command.run(tokyo, message, args)
  }
}