const Discord = require('discord.js')
const token = "BOT TOKEN"

exports.run = async(client, message, args) => {
if (message.channel.type !== Discord.ChannelType.GuildText) return;
const limit = args[0] ? args[0] : 0;

if(!limit) return message.reply(`Proper use: \`/slowmode [0/21600]\``)

if(isNaN(limit)) return message.reply(`Please specify number.\nProper use: \`/slowmode 120\``)

if (limit > 21600) return message.reply("The time limit can be maximum **6** hours.")

message.reply(`Write time limit set to **${limit}** seconds.`)

var request = require('request');
request({
url: `https://discordapp.com/api/v9/channels/${message.channel.id}`,
method: "PATCH",
json: {
rate_limit_per_user: limit
},
headers: {
"Authorization": `Bot ${token}`
},
})

}

exports.conf = {
aliases: ["slow-mode", "slowmode"]
}

exports.help = {
name: 'slow-mode'
}
