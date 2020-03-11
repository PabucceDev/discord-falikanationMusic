const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "Falikanation için yazılmıştır.[by Pabucce#0001]",
        "by Pabucce#0001",
        "Falikanation için yazılmıştır.[by Pabucce#0001]",
        "by Pabucce#0001"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random] );
        }, 5 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setGame(`Bot açılıyor! Lütfen bekleyiniz.`);
  console.log(`Falikanation için yazılmıştır.[by Pabucce#0001]`);
  console.log(`Falikanation için yazılmıştır.[by Pabucce#0001]`);
};
