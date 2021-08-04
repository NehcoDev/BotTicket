const Discord = require('discord.js');
const dateFormat = require("dateformat");


module.exports = async(nehco, message, event) => {
 if(message.author.nehco) return;

 if(!message.guild){
   if(message.author.nehco) return;
   var guild = nehco.guilds.cache.find(g => g.id === "ID DE VOTRE GUILD")
   const STAFF = guild.roles.cache.find(role => role.name == 'ID ROLE')
   const everyone = guild.roles.everyone
   const yourchannel = guild.channels.cache.find(channel => channel.name === message.author.id)
   if(yourchannel === undefined) {

    message.channel.send("**Votre message à bien été reçu par notre équipe ! Nous vous recontacterons dès que possible !**")
    var categoryID = guild.channels.cache.find(channel => channel.name == "NOM DE VOTRE CATEGORIE" && channel.type == "category");
     if (!categoryID) {
         guild.channels.create('NOM DE VOTRE CATEGORIE', { type: "category" }).then(category => {
             categoryID = category.id
         })
     } else {
         categoryID = categoryID.id
     }

     const created = guild.channels.create(message.author.id, "text").then(created => {

         created.setParent(categoryID).then((settedParent) => {
             settedParent.updateOverwrite(everyone, {
                 "VIEW_CHANNEL": false
             });

             settedParent.updateOverwrite(STAFF, {
                 "VIEW_CHANNEL": true,
                 "MANAGE_MESSAGES": true
             })
     })
     created.send(`**Conseil:**\nPour répondre au message vous avez juste à mettre votre message dans le channel et c'est envoyer !\n\n Un nouveau ticket de: **${message.author.tag}**.\n Création du ticket : \`${dateFormat(new Date(), "dd/mm/yyyy")}\`\n Il vous à dit: **${message.content}**`)

     })


 }else{yourchannel.send(`**[${message.author.tag}]** Il vous à répondu: **${message.content}**`)}}
 
try{
 
 const user = message.guild.members.cache.get(message.channel.name)
 
    if(!message.content.startsWith("close")){
     	user.send(`**(Staff) ${message.author.username}:** ${message.content}`)
        message.react('👍');	  
    }
    if(message.content.startsWith("close")){
        if(user != undefined){
            user.send(`**Votre ticket d'aide est maintenant fermé par **${message.author.tag}**. N'hésitez surtout pas à nous recontacter si vous avez d'autres questions ou autres achats.`)
        }
            message.channel.send("Le problème a été réglé, le salon sera fermé dans 30 seconde ! ")
            message.guild.channels.cache.get(message.channel.id).setName(`Channel en cours de fermeture`)
            
            setTimeout(() =>{
            message.channel.delete()
            }, 30 * 600)
    }}
    catch{}
}

///// Si vous rencontrer un problème venez me mp Nehco#0001 
