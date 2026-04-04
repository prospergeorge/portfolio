AOS.init();


//NavBar

var navIcon = document.querySelector('header .navIcon');
var header = document.querySelector('header');

navIcon.onclick = function() {
    header.classList.toggle("hActive");
    navIcon.classList.toggle("nActive");
}



// function delay(ms) {
//     return new Promise( resolve => setTimeout(resolve, ms));
// }

// async function runloop() {
//     // // Counter Animation

//     var CounterSpan = document.querySelector('.counterBox span');

//     for (let index = 0; index < 200; index++) {

//         CounterSpan.innerHTML = Number(CounterSpan.innerHTML) + 1;

//         await delay(1);
//     }

//     CounterSpan.innerHTML = Number(CounterSpan.innerHTML) + "+";

// }

// runloop()