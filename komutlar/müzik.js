const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Falikanation » Müzik Komutları')
.setTimestamp()
.addField('» -Çal- Müzik Açar', ',çal ')
.addField('» -Devam- Şarkıya Devam Eder', ',devam')
.addField('» -Duraklat- Şarkıyı Durdurur', ',duraklat')
.addField('» -kapat- Şarkıyı Kapatır', ',kapat')
.addField('» -Ses- Müziğe Ses Ve Bass Eklersiniz', ',ses 1/100')
.addField('» -Çalan- Çalan Şarkının Bilgisini Verir', ',çalan')
.addField('» -Geç- Şarkıyı Geçersiniz', ',geç')
.setFooter('Falikanation Music by Pabucce', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardım','müzik','muzik','komutlar'], 
  permLevel: 0 
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};