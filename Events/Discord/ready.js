module.exports = async (nehco) => {
    console.log(`${nehco.user.tag} le bot est allumé`)

    const statuses = [
        'mettez votre status !', ///vous pouvez en mettre plusieurs si besoin d'aide mp moi Nehco#0001
      ]
      
      let i = 0
      setInterval(() => {
        nehco.user.setActivity(statuses[i], {type: 'PLAYING'})   ///WATCHING, LISTENING, STREAMING
        i = ++i % statuses.length
      }, 1e4)
    ;
}
