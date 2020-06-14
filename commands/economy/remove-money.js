const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  if (!message.member.hasPermission("MANAGE_USERS"))
    return message.reply("You Dont Have Enough Permissions!");
  if (!args[0]) return message.reply("Give Me The Amount To Delete");

  const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Success!")
    .setDescription("You Deleted " + args[0] + "$ Of <@" + user + ">");
message.channel.send(embed)
db.subtract(`money_${user.id}_${message.guild.id}`,args[0])
};
module.exports.help = {
  name: "remove-money",
  aliases: ["rm-money"]
};
