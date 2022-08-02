let homeEl = document.getElementById("score-home")
let awayEl = document.getElementById("score-away")
let countHome = 0
let countAway = 0

function add1home() {
    countHome += 1
    homeEl.textContent = countHome
}

function add2home() {
    countHome += 2
    homeEl.textContent = countHome
}

function add3home() {
    countHome += 3
    homeEl.textContent = countHome
}

function del1home(){
    countHome -= 1
    homeEl.textContent = countHome
}

function del2home(){
    countHome -= 2
    homeEl.textContent = countHome
}

function del3home(){
    countHome -= 3
    homeEl.textContent = countHome
}

function resetHome() {
    countHome = 0
    homeEl.textContent = countHome
}

function add1away() {
    countAway += 1
    awayEl.textContent = countAway
}

function add2away() {
    countAway += 2
    awayEl.textContent = countAway
}

function add3away() {
    countAway += 3
    awayEl.textContent = countAway
}

function del1away(){
    countAway -= 1
    awayEl.textContent = countAway
}

function del2away(){
    countAway -= 2
    awayEl.textContent = countAway
}

function del3away(){
    countAway -= 3
    awayEl.textContent = countAway
}

function resetAway() {
    countAway = 0
    awayEl.textContent = countAway
}