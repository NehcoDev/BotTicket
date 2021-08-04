const Discord = require('discord.js');
const nehco = new Discord.Client();
const fs = require('fs');
const TOKEN = "VOTRE TOKEN";

const loadEvents = (dir) => {
    fs.readdirSync(dir).forEach(dirs => {
        let events = fs.readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"))
        for(let file of events) {
            let getFileName = require(`${dir}/${dirs}/${file}`)
            let eventName = file.split('.')[0]
            nehco.on(eventName, getFileName.bind(null, nehco))
        }
    }) 
}
nehco.login(TOKEN)
loadEvents("./Events/")


//// Bot crée par Nehco#0001 