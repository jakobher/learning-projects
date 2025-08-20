function newPokemon() {
    // Slumpmässigt nummer mellan 1-151
    const randomNumber = Math.floor(Math.random() * 151) + 1
    console.log("Hämtar Pokémon nummer:", randomNumber)



    // Hämta från API:et
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        .then(response => response.json())
        .then(pokemon => {
            console.log("Fick Pokémon:", pokemon)
            console.log("Namn:", pokemon.name)
            console.log("Bild:", pokemon.sprites.front_default)

            window.currentPokemon = pokemon.name

            // Visa bilden
            document.getElementById("pokemonImage").src = pokemon.sprites.front_default

            // Visa info (utan att avslöja namnet!)
            document.getElementById("pokemonInfo").innerHTML = "Vem är denna Pokémon?"

            // Töm tidigare gissning och resultat
            document.getElementById("hint").innerHTML = ""
            document.getElementById("guess").value = ""
            document.getElementById("result").innerHTML = ""
        })
}

function showHint() {
    if (window.currentPokemon) {
        const firstLetter = window.currentPokemon.charAt(0).toUpperCase()
        document.getElementById("hint").innerHTML = "💡 Ledtråd: Namnet börjar på " + firstLetter + "!"
    } else {
        document.getElementById("hint").innerHTML = "Hämta en Pokémon först!"
    }
}

function checkGuess() {
    const userGuess = document.getElementById("guess").value.toLowerCase()
    const correctName = window.currentPokemon.toLowerCase()

    console.log("Du gissade:", userGuess)
    console.log("Rätt svar:", correctName)

    if (userGuess === correctName) {
        document.getElementById("result").innerHTML = "🎉 Rätt! Det var " + window.currentPokemon + "!"
    } else {
        document.getElementById("result").innerHTML = "❌ Fel! Det var " + window.currentPokemon + ". Försök igen!"
    }
}