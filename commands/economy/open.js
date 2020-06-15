const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  let amount = Math.floor(Math.random() * 2300) + 1;
  let user = message.author;
  if(!args[0]) return message.reply("Give Me The Case Name")
  if (args[0] == "moneycase") {
    let Embed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`You Don't Have Any Moneycase To Open!`)
      .setFooter(message.author.username);

    let mcase = await db.fetch(`moneycase_${message.guild.id}_${user.id}`);

    if (mcase < 1) return message.channel.send(Embed);
    let Embed2 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("You Got " + amount + " Dollars Congrulations!");
    message.channel.send(Embed2);
    db.add(`money_${message.guild.id}_${user.id}`, amount);
    db.subtract(`moneycase_${message.guild.id}_${user.id}`, 1);
  }
};
