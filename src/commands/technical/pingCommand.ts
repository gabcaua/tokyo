import Eris from 'eris';
export = {
  name: 'ping',
  aliases: ['pong'],
  run: async (bot: Eris.Client, message: any, args: String) => {
    /* lidar com os erros: */
    function handle() {
      bot.createMessage(message.channel.id, "Houve um erro!")
    }
    /* executar passo-a-passo: */
    const latency = message.channel.guild.shard.latency
    if (latency === Infinity) {
      let pong = Date.now()
      bot.createMessage(message.channel.id, "🏓 » **Toma essa!**")
        .then(async (newMessage) => {
          pong = Math.round(Date.now() - pong)
          return setTimeout(() => {
            newMessage.edit(`📡 » Demorou **aprox. \`${pong}ms\`**`)
              .catch(() => handle())
          }, 3000)
        })
        .catch(() => handle())
    } else {
      return bot.createMessage(message.channel.id, `📡 » WebSocket: **\`${latency}ms\`**`)
    }
  }
}