
let lence = document.querySelector('.lence')
let passe = document.querySelector('.passe')
let duce = document.querySelector('#duce')
let ne = document.querySelector('.new')
let pla = 1
let i = 0

let scoreduce = document.querySelector(`#scoreduce${pla}`)
let score = document.querySelector(`#score${pla}`)

lence.addEventListener('click', () => {
    scoreduce = document.querySelector(`#scoreduce${pla}`)
    score = document.querySelector(`#score${pla}`)
    duce.innerHTML = ''
    let rand = Math.floor(Math.random() * 5) + 1
    if (rand == 1) {
        scoreduce.innerHTML = -1

        if (pla == 1) {
            pla = 2
        }
        else {
            pla = 1
        }
    }
    for (let i = 0; i < rand; i++) {
        duce.innerHTML += `<div class="duce${i}"></div>`
    }

    scoreduce.innerHTML = Number(scoreduce.innerHTML) + rand
})
passe.addEventListener('click', () => {
    score.innerHTML = Number(score.innerHTML) + Number(scoreduce.innerHTML)
    scoreduce.innerHTML = 0
    if (Number(score.innerHTML) >= 100) {
        let nem = document.querySelector(`#na${pla}`)
        nem.innerHTML = 'WINNER'
        nem.style.color = 'pink'
    }
    if (i % 2 == 0) {
        pla = 2
        i++
    } else {
        pla = 1
        i++
    }
})
ne.addEventListener('click', () => {
    location.reload()
})
