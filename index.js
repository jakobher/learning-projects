function nextStep() {
    console.log("nextStep körs")
    const name = document.getElementById("nameInput").value
    console.log("Namn:", name)

    // Dölj steg 1, visa steg 2
    document.getElementById("step1").style.display = "none"
    document.getElementById("step2").style.display = "block"

    // Uppdatera hälsningen
    document.getElementById("greeting").innerHTML = "Hej " + name + "!"
}

function checkPassword() {
    const password = document.getElementById("passwordInput").value
    const name = document.getElementById("nameInput").value

    if (!password) {
        document.getElementById("nopw").innerHTML = 'Inget lösenord är också ett lösenord.. eller?🤣'
    } else if (password.length < 4) {
        document.getElementById("wrongpw").innerHTML = 'Det där var absolut inte det hemliga lösenordet egentligen..🤣'
    } else {
        document.getElementById("password").innerHTML = 'Sjukt att du kunde det hemliga lösenordet 😮'
    }

    document.getElementById("welcomeMessage").innerHTML = "Men.. Välkommen " + name + "!"

    // Gå alltid vidare, oavsett lösenord:
    document.getElementById("step2").style.display = "none"
    document.getElementById("loginSuccess").style.display = "block"
}

