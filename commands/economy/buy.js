const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("e!")) return;
  if (!args[0]) return message.reply("Enter An Item To Buy");
  let user = message.author;
  let args0 = args[0];
  let author = db.fetch(`money_${message.guild.id}_${user.id}`);

  let vipembed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${user} You Need 3500 Dollars To Purchase VIP`);

  if (args[0] == "vip") {
    if (author < 1200) return message.channel.send(vipembed);

    db.fetch(`vip_${message.guild.id}_${user.id}`);
    db.set(`vip_${message.guild.id}_${user.id}`, true);

    let vipembed2 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`${user} Purchased VIP For 3500 Dollars`);

    db.subtract(`money_${message.guild.id}_${user.id}`, 3500);
    message.channel.send();
  }
  if (args[0] == "car") {
    let carembed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(` You need 800 dollars to purchase a new car`);

    if (author < 800) return message.channel.send(carembed);

    db.fetch(`car_${message.guild.id}_${user.id}`);
    db.add(`car_${message.guild.id}_${user.id}`, 1);

    let carembed2 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`${user} You Purchased a New Car For 800 Dollars`);

    db.subtract(`money_${message.guild.id}_${user.id}`, 800);
    message.channel.send(carembed2);
  } else if (args[0] == "phone") {
    let phoneembed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`${user} You Need 1000 Dollars To Purchase Phone`);

    if (author < 1000) return message.channel.send(phoneembed);
    db.fetch(`pphone_${message.guild.id}_${user.id}`);
    db.add(`pphone_${message.guild.id}_${user.id}`, 1);

    let phoneembed2 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`${user} You Purchased a Phone For 1000 Dollars`);

    db.subtract(`money_${message.guild.id}_${user.id}`, 1000);
    message.channel.send(phoneembed2);
  }
  let spywareembed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${user} You Need 200 Dollars To Purchase Spyware`);

  if (args[0] == "villa") {
    if (author < 200) return message.channel.send(spywareembed);

    db.fetch(`money_${message.guild.id}_${user.id}`);
    db.add(`villa_${message.guild.id}_${user.id}`, 1);

    let spywareembed2 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${user} You Purchased Spyware  For 200 Dollars`);

    db.subtract(`money_${message.guild.id}_${user.id}`, 200);
    message.channel.send(spywareembed2);
  }
  let moneycasee2 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${user} You Need 600 Dollars To Purchase Money Case`);

  if (args[0] == "moneycase") {
    if (author < 600) return message.channel.send(moneycasee2);

    db.fetch(`moneycase_${message.guild.id}_${user.id}`);
    db.add(`moneycase_${message.guild.id}_${user.id}`, 1);

    let moneycasee = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`${user} You Purchased Money Case  For 600 Coins`);

    db.subtract(`money_${message.guild.id}_${user.id}`, 600);
    message.channel.send(moneycasee);
  } else if (args[0] == "internet") {
    let intembed2 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `${user} You Need 120 Dollars To Purchase Internet Package`
      );

    if (author < 120) return message.channel.send(intembed2);

    db.fetch(`internet_${message.guild.id}_${user.id}`);
    db.add(`internet_${message.guild.id}_${user.id}`, 1);

    let intembed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `${user} You Purchased 1 GB Internet Package  For 120 Dollars`
      );

    db.subtract(`money_${message.guild.id}_${user.id}`, 120);
    message.channel.send(intembed);
  }
};
module.exports.help = {
  name: "buy",
  aliases: [""]
};
