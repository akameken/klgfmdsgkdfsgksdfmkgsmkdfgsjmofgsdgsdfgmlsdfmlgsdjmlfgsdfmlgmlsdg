const Discord = require("discord.js");
const client = new Discord.Client();

client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('499247001003884544');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online : ${currentSize} `);
  if (currentSize !== size) channel.setName(`Voice Online : ${currentSize} `);
});
client.login(procces.env.BOT_TOKEN)
