import  Eris  from 'eris'
import { readdirSync } from 'fs'
import { app } from './src/server/server'
import commandHandler from './src/handlers/commandHandler'
/* eris setup: */
const config = { token: String(process.env.TOKEN) }
const tokyo = new Eris.Client(`Bot ${config.token}`, {
    intents: ["guilds", "guildMembers", "guildEmojis", "guildIntegrations", "guildPresences", "guildMessages", "guildMessageReactions", "guildMessageTyping", "directMessages", "directMessageReactions","directMessageTyping"]})
commandHandler.execute(tokyo)
/* webserver setup: */
app.get('/', (req, res) => {
    res.status(200).send("[ OLÁ ] Tokyo acena.")
});
app.listen(8080, () => {
  console.info("[ SERVIDOR ] na linha.")
})