("")const Discord = require("discord.js");
const bot = new Discord.Client();
const token = ('NDE2OTYxOTc3NDU0Mjk3MTE5.DXMF0g.YpCI1iaZVKO7Xt6X6YXOCCEIX28');
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity('Son compte Twitter').catch(console.error)
});

bot.on('guildMemberAdd', function (member) {
  member.createDM().then(function (channel) {
    return channel.send('Wsh mon they ' + member.displayName + ' ! Eh ta pa vu mon compte twitter ?')
  }).catch(console.error)
})

bot.login(token);