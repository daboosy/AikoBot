const Discord = require('discord.js');

const clinet = new Discord.client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFilles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
 for(const file of commandFilles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Aiko is online!');
});

client.on('message', message =>{
    if(!message.content.startWith(prefix) || message.auther.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }
})






clinet.login('NzYxNTU3NDA2NDgzNjExNjQ4.X3cVmg.XGTJ2-SgKNQ_smHG2Ln3ES3Krio');
