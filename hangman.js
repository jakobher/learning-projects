// for-loop förklarat

// Hylla [H][U][N][D]
// Plats  0  1  2  3

// "Jag börjar på plats 0"
// let i = 0;

// "Så länge det finns böcker kvar..."
// i < secretWord.length  // (4 böcker totalt)

// "...ta nästa bok"
// i++  // Gå till nästa plats

let words = ["HUND", "KATT", "ELEFANT", "ZEBRA", "LEJON", "POKEMON", "HEMKÖP", "KNÄSKADA", "FOTBOLLSSKOR", "GOTLAND", "KALMAR"]
let secretWord = words[Math.floor(Math.random() * words.length)] // Slumpa fram ord från ordlistan
let guessedLetters = [] // Lista på alla bokstäven spelaren gissat
let wrongGuesses = 0
let maxWrongGuesses = 11
document.getElementById("newGameButton").style.display = 'none'

function guessLetter() {

    document.getElementById("message").innerHTML = ""

    // Hämta vad spelaren skrev
    let input = document.getElementById("letterInput").value.toUpperCase()
    console.log(input)

    // Kolla om bokstaven finns/är använd
    if (guessedLetters.includes(input)) {
        document.getElementById("message").innerHTML = "Du har redan gissat på: " + input
    } else {
        guessedLetters.push(input)

        if (secretWord.includes(input)) {
            // Gör inget
        } else {
            wrongGuesses++
            drawHangman()
            if (wrongGuesses >= maxWrongGuesses) {
                document.getElementById("message").innerHTML = "💀 Du förlorade! Ordet var " + secretWord

                document.getElementById("letterInput").disabled = true;
                document.getElementById("guessButton").disabled = true;
                document.getElementById("newGameButton").style.display = 'block'
            }
        }

        document.getElementById("wordDisplay").innerHTML = showWord()
        document.getElementById("guessedLetters").innerHTML = "Gissade bokstäver: " + guessedLetters.join(", ")
    }

    console.log('Uppdaterar sidan med bokstav')

    document.getElementById("letterInput").value = ""

    let word = showWord()

    if (word.includes("_")) {
        console.log('Continue playing')
    } else {
        document.getElementById("message").innerHTML = "🎉 Du vann! Ordet var " + secretWord
        document.getElementById("letterInput").disabled = true;
        document.getElementById("guessButton").disabled = true;
        document.getElementById("newGameButton").style.display = 'block'
    }
}

function showWord() {
    let display = "" // Tom sträng som ska byggas upp

    // Gå igenom varje bokstav i det hemliga ordet
    for (let i = 0; i < secretWord.length; i++) {
        let letter = secretWord[i]

        // Kolla om spelaren redan har gissat denna bokstav
        if (guessedLetters.includes(letter)) {
            display = display + letter + " " // Visa bokstaven
        } else {
            display = display + "_ " // Visa understreck
        }
    }

    return display // Returnera stängen som byggts 
}

document.getElementById("wordDisplay").innerHTML = showWord();

function newGame() {
    // Återställ variabler
    guessedLetters = []
    wrongGuesses = 0
    drawHangman()
    secretWord = words[Math.floor(Math.random() * words.length)]

    // Aktivera input och knapp
    document.getElementById("letterInput").disabled = false;
    document.getElementById("guessButton").disabled = false;

    // Rensa skärmen
    document.getElementById("message").innerHTML = ""

    // Dölja nytt spel-knappen gör vi redan vid variablerna längst upp i koden?
    document.getElementById("newGameButton").style.display = 'none'

    // Uppdatera vad som visas
    document.getElementById("wordDisplay").innerHTML = showWord();
    document.getElementById("guessedLetters").innerHTML = "Gissade bokstäver: ";
}

function drawHangman() {
    document.getElementById('hangmanImage').src = `img/hangman${wrongGuesses}.png`
}

function guessFromKeyboard(letter) {
    document.getElementById("letterInput").value = letter

    guessLetter()
}

// Dölj input + knapp
document.getElementById("letterInput").style.display = "none";
document.getElementById("guessButton").style.display = "none";