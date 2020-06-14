const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let bal = db.fetch(`money_${user.id}_${message.guild.id}`);
  if (bal === null) bal = 0;
  const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Balance")
    .setDescription("<@"+ user +">'s Balance Is "  + bal + "$");
  message.channel.send(embed);
};
module.exports.help = {
  name: "balance",
  aliases: ["bal"]
};
