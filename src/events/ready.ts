import Eris from 'eris'
export = {
  execute: (tokyo: Eris.Client) => {
    tokyo.editStatus('online', [{name: 'tk.ajuda', type: 2}])
    console.log(`[ READY ] ${tokyo.user.username + '#' + tokyo.user.discriminator} online!`)
  }
}