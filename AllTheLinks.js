document.getElementById("randomizerButton").style.visibility = 'hidden'
document.getElementById("result").innerHTML = ''
document.getElementById("links").innerHTML = 'Här nedan finns lite användbara länkar för dig! Kan du inte välja? Klicka på knappen nedan👍'
document.getElementById("myLinks").style.visibility = 'visible'
document.getElementById("randomizerButton").style.visibility = 'visible'


// Funktion för att randomisera en streamingtjänst
function randomizer () {
const streamingLinks = ['Netflix', 'HBO Max', 'Disney+', 'PrimeVideo', 'Twitch', 'YouTube']
const randomResult = streamingLinks[(Math.floor(Math.random() * 6))]
const howAboutThis = 'Vad sägs om ' + randomResult + '?'
document.getElementById("result").innerHTML = howAboutThis
}
