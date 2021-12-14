import colors from '../cogs/colors'
export = {
  execute: (message: any, tokyo: any) => {
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
          description: '✨ » Para falar comigo, use o prefixo: **`tk.`**',
          color: colors["default"]
        }
      })
    }
  }
}