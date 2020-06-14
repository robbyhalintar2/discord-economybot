const Discord = require("discord.js")
const db = require("quick.db")
exports.run = (client,message,args) =>{
let user = message.mentions.users.first() || message.author
if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("You Dont Have Enough Permissions!")
if(!args[0]) return message.reply("Give Me An Amount")
if(isNaN(args[0])) return message.reply("That Is Not An Valid Number")
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Success!")
.setDescription("Added "+ args[0] +"$ To <@" + user +">")
message.channel.send(embed)
  db.add(`money_${user.id}_${message.guild.id}`,args[0])
} 
  module.exports.help = {
  "name":"add-money",
  "aliases":["addm","add"]
  }
