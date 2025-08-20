document.getElementById("myLinks").style.visibility = 'hidden'
document.getElementById("logoutButton").style.visibility = 'hidden'
document.getElementById("randomizerButton").style.visibility = 'hidden'
document.getElementById("welcomeback").innerHTML = ''
document.getElementById("result").innerHTML = ''

function greetings() {

console.log('Startar program')
const hello = 'Hej '

console.log('Steg 2 - fråga om namn')
const firstNamePrompt = prompt ('Kul att du vill logga in! Vad heter du?')
console.log('Steg 3 - visa namn')

const firstName = hello + firstNamePrompt
document.getElementById("test").innerHTML = (firstName)

console.log("4 - Efter innerHTML")
const passwordQuestion = firstName + "! Skriv in det hemliga lösenordet.."

const passwordPrompt = prompt (passwordQuestion)
console.log("5 - Efter andra prompt")



// Kontrollera lösenordet över/under 4 tecken eller inga alls
if (!passwordPrompt) {
    document.getElementById("nopw").innerHTML = 'Inget lösenord är också ett lösenord.. eller?🤣'
} else if (passwordPrompt.length < 4) {
    document.getElementById("wrongpw").innerHTML = 'Det där var absolut inte det hemliga lösenordet egentligen..🤣'
} else {
    document.getElementById("password").innerHTML = 'Sjukt att du kunde det hemliga lösenordet 😮'
}


document.getElementById("links").innerHTML = 'Här nedan finns lite användbara länkar för dig! Kan du inte välja? Klicka på knappen nedan👍'
document.getElementById("myLinks").style.visibility = 'visible'
document.getElementById("loginButton").style.visibility = 'hidden'
document.getElementById("logoutButton").style.visibility = 'visible'
document.getElementById("randomizerButton").style.visibility = 'visible'
}

// Funktion för att dölja/rensa upp efter fejkad utloggning
function logout () {
    document.getElementById("logoutButton").style.visibility = 'hidden'
    document.getElementById("randomizerButton").style.visibility = 'hidden'
    document.getElementById("myLinks").style.visibility = 'hidden'
    document.getElementById("loginButton").style.visibility = "visible"
    document.getElementById("password").innerHTML = ''
    document.getElementById("links").innerHTML = ''
    document.getElementById("test").innerHTML = ''
    document.getElementById("wrongpw").innerHTML = ''
    document.getElementById("nopw").innerHTML = ''
    document.getElementById("result").innerHTML = ''
    document.getElementById("welcomeback").innerHTML = 'Logga in igen väl..'
}


// Funktion för att randomisera en streamingtjänst
function randomizer () {
const streamingLinks = ['Netflix', 'HBO Max', 'Disney+', 'PrimeVideo', 'Twitch', 'YouTube']
const randomResult = streamingLinks[(Math.floor(Math.random() * 6))]
const howAboutThis = 'Vad sägs om ' + randomResult + '?'
document.getElementById("result").innerHTML = howAboutThis
}
