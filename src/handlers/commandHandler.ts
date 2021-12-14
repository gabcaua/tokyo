import { readdirSync } from 'fs';
export = {
  execute: (tokyo: any) => {
    tokyo.commands = new Map()
    tokyo.aliases = new Map()
    let commandCounter = 0

    readdirSync("./src/commands/").forEach(dir => {
      const commands = readdirSync(`./src/commands/${dir}/`)
      commands.filter(file => file.endsWith(".ts"))
      for (let file of commands) {
        let pull = require(`../commands/${dir}/${file}`)
        if (pull.name) {
          commandCounter += 1
          tokyo.commands.set(pull.name, pull)
        } else {
          console.log(`[ WARN ] ${file} não possui um nome declarado!`)
          continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases))
          pull.aliases.forEach(async function(alias: any) {
            tokyo.aliases.set(alias, pull.name)
          })
      }
      console.log(`[ LOADER ] ${commandCounter} funções.`)
      const eventHandler = require('../handlers/eventHandler')
      eventHandler.execute(tokyo)
    })
  }
}