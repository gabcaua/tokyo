import Eris from 'eris'
export = {
  execute: (tokyo: any) => {
    const path = "../events/"
    tokyo.connect()

    tokyo.once('ready', () => {
      require(path + "/ready").execute(tokyo)
    })

    tokyo.on('messageCreate', (message: Eris.Message) => {
      require(path + "messageCreate").execute(message, tokyo)
    })
    
  }
}