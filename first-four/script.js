// // Project 1 - Expanding Cards
// const panels = document.querySelectorAll('.panel');

// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses();
//         panel.classList.add('active');
//     })
// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active');
//     })
// }

// // Project 2 - Progress Steps

// const progress = document.getElementById('progress');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const circles = document.querySelectorAll('.circle');

// let currentActive = 1;

// next.addEventListener('click', () => {
//     currentActive++;

//     if(currentActive > circles.length) {
//         currentActive = circles.length
//     }

//     console.log(currentActive)
//     update();
// })

// prev.addEventListener('click', () => {
//     currentActive--;

//     if(currentActive < 1) {
//         currentActive = 1
//     }

//     update();
// })

// function update() {
//     circles.forEach((circle, idx) => {
//         if(idx < currentActive) {
//             circle.classList.add('active');
//         } else {
//             circle.classList.remove('active');
//         }
//     })

//     const actives = document.querySelectorAll('.active');

//     progress.style.width = (actives.length -1) / (circles.length - 1) * 100 + '%';

//     if(currentActive === 1) {
//         prev.disabled = true;
//     } else if (currentActive === circles.length) {
//         next.disabled = true
//     } else {
//         prev.disabled = false
//         next.disabled = false
//     }
// }

// ******Project 4 JS*******

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus();
})