const Discord = require("discord.js");
var bot = new Discord.Client();
var Prefix = ('/');
var randnum = 0;

//const db = low(adapter);

//db.defaults({ histoire: [],xp: []}).write()

bot.on('ready', () => {
  bot.user.setPresence({ game: {name: "[/help] BlueBot"}})
  console.log('BlueBot Ready')
});

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    var role = member.guild.roles.find ('name', 'Followers');
    member.addRole (role)
    return channel.send('Salut, bienvenue sur mon serveur, si tu veut connaitre les commande, fait un !help ' + member.displayName)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
});

bot.on('message', msg => {
  
  if (msg.content === Prefix + 'ping') {
    msg.reply('Pong!');
    console.log('ping pong')
  }
  

  if(msg.content === Prefix + "help"){
    var help_embed = new Discord.RichEmbed()
      .setColor('#1BE658')
      .addField("Commandes BlueBot :" , "-/help : Affiche les commandes \n-/ping : Dit Pong  \n-/yt : Affiche la chaine du serveur \n-/twitter : Affiche le twitter du serveur")
    msg.author.sendEmbed(help_embed);
    console.log('Help')
    msg.delete();
  }

  if(msg.content === Prefix + "yt"){
      msg.reply("ca existe pas encore mais bientot")
      console.log('yt')
  }

  if(msg.content === Prefix + "twitter"){
    msg.reply("Pacience,Pacience....")
    console.log('tweeter')
}
  
  if(msg.content === "sa-va" ){
    ramdom();

      if(randnum == 1){
        msg.reply("Merci je vais bien");
        console.log(randnum );
      }

      if(randnum == 2 ){
        msg.reply("Je ne vais pas tres bien,merci de t'inquieter")
        console.log(randnum);
      }

    }

  function ramdom(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min + 1 ) + min);
  
  }

});


bot.login('NDk1NTY1NDU2Mzg4Nzg0MTI4.DpPuMg.p2VBsBQKJNlsBSTuKnvnRuotgik');

