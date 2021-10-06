// bring in all class contents
const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

// const navChoices = ['Home', 'Work', 'Blog', 'About'];
// const { Home, Work, Blog, About } = navChoices;
// bring all list items and then add an event listener on each of these; may want to loop through with a foreach 

// then add class of active to whichever one you click on
listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active');
        contents[idx].classList.add('show');

    } )
});

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}

// and add class of show for which ever one you click on
// const homeBtn = document.querySelector('btn');
// homeBtn.addEventListener('click', (navChoices)=> {
//     // take to home screen 
//     // add class of active when you click on it
//     const 
//     homeBtn.addClassList('active');
// })

// add class of active when you click on it