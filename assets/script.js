// Richiamo le variabili che mi servono e creo un array vuoto per i numeri
const tabellone = document.getElementById("tabellone")
const bottone = document.getElementById("bottone")
const estratti = []

// Ciclo per generare i div delle celle e i numeri dentro
function generaCelle() {
    for (let i = 1; i <= 90; i++) { 
        const cella = document.createElement("div")
        cella.classList.add("cella")
        cella.innerText = i
        tabellone.appendChild(cella)
    }
}

// Funzione per l'estrazione
function estrazione() {
// Se la lunghezza dell'array vuoto è minore di novanta, estrai il numero
if (estratti.length < 90) { 
let randomNum

// Crea il numero e lo metto nell'array
do { 
    randomNum = Math.floor(Math.random() * 90) + 1
} while (estratti.includes(randomNum))
estratti.push(randomNum)

// Aggiungi il numero estratto alla cella corrispondente
const numeroEstratto = tabellone.querySelector(`.cella:nth-child(${randomNum})`)
numeroEstratto.classList.add("numeroEstratto")
numeroEstratto.textContent = randomNum 

// Se il tabellone è pieno, messaggio
if (estratti.length === 90) {
    alert("Hai completato il tabellone!")
}

if (randomNum === 90) {
    sound90()
} else {
    sound()
}
}
}


bottone.addEventListener("click", estrazione)
generaCelle()



function sound(){
let snd = new Audio('assets/Game Menu Select Sound Effect.mp3')
snd.play() }


function sound90() {
    let snd90 = new Audio ("assets/Loud Scream   Sound Effect.mp3")
    snd90.play()
}