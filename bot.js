const Discord = require("discord.js");
const client = new Discord.Client();

client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('533855923869974529');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online : ${currentSize} `);
  if (currentSize !== size) channel.setName(`Voice Online : ${currentSize} `);
});

client.login(process.env.BOT_TOKEN);
