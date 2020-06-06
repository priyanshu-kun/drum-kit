
/*This is my logic for identifying the element and create sound corresponding to the element*/

// const keys = document.querySelectorAll(".key");
// const sounds = document.querySelectorAll("audio")


// function makeSound(soundId){
//     sounds.forEach(sound => {
//         // console.log(sound.dataset.key)
//         if(parseInt(sound.dataset.key) === soundId) {
//             // console.log(sound)
//             sound.play();
//         }

//     })
// }

// window.addEventListener("keydown",function(e){
//     keys.forEach(letter => {
//         if(parseInt(letter.dataset.key) === e.keyCode) {
//             letter.classList.add('playing');
//             setTimeout(() => {
//                 letter.classList.remove('playing');
//             }, 300);
//             makeSound(e.keyCode);
//         }

//     })
// })


/*Instructor Logic*/ 

window.addEventListener("keydown",e => {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if(!sound) return;
    sound.currentTime = 0;
    sound.play();
    key.classList.add("playing")
})

const keys = document.querySelectorAll(".key");

function removertransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing")
}

keys.forEach(items => items.addEventListener("transitionend",removertransition));