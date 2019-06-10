const boom = new Audio('./sounds/boom.wav');
const clap = new Audio('./sounds/clap.wav');
const hihat = new Audio('./sounds/hihat.wav');
const kick = new Audio('./sounds/kick.wav');
const openhat = new Audio('./sounds/openhat.wav');
const ride = new Audio('./sounds/ride.wav');
const snare = new Audio('./sounds/snare.wav');
const tink = new Audio('./sounds/tink.wav');
const tom = new Audio('./sounds/tom.wav');
const q = document.getElementById('q');
const w = document.getElementById('w');
const e = document.getElementById('e');
const r = document.getElementById('r');
const t = document.getElementById('t');
const y = document.getElementById('y');
const u = document.getElementById('u');
const i = document.getElementById('i');
const o = document.getElementById('o');

// Play drum by keyboard press



// Play music by mouse click

q.addEventListener('click', () => {
    console.log('clicked')
    boom.play();
})
w.addEventListener('click', () => {
    clap.play();
})
e.addEventListener('click', () => {
    hihat.play();
})
r.addEventListener('click', () => {
    kick.play();
})
t.addEventListener('click', () => {
    openhat.play();
})
y.addEventListener('click', () => {
    ride.play();
})
u.addEventListener('click', () => {
    snare.play();
})
i.addEventListener('click', () => {
    tink.play();
})
o.addEventListener('click', () => {
    tom.play();
})