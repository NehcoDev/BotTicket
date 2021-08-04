module.exports = async (bot) => {
    console.log(`${bot.user.tag} Est Allumé batard tchiip`)

    const statuses = [
        'votre status', ///vous pouvez en mettre plusieurs si besoin d'aide mp moi Nehco#0001
      ]
      
      let i = 0
      setInterval(() => {
        bot.user.setActivity(statuses[i], {type: 'PLAYING'})   ///WATCHING, LISTENING, STREAMING
        i = ++i % statuses.length
      }, 1e4)
    ;
}
