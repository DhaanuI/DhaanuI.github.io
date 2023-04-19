const menu = document.querySelector(".menu")
const navOpen = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")
const navBar = document.querySelector(".navbar")
const navLink = document.querySelector(".nav-list")
const home = document.getElementsByClassName("nav-link home")
const skills = document.getElementsByClassName("nav-link skills")
const about = document.getElementsByClassName("nav-link about")
const project = document.getElementsByClassName("nav-link projects")
const contact = document.getElementsByClassName("nav-link contact")

function resume() {
    window.open("Dhaanu_I_Resume.pdf", "_blank")
}

const bd = document.getElementById("bd")
const bd2 = document.getElementById("bd2")

// bd.addEventListener('click', () => {
//     menu.classList.remove("show")
// })

// window.addEventListener('scroll', () => {
//     //home
//     if (window.pageYOffset >= 58 && window.pageYOffset < 571) {
//         home.classList.add("highlight")
//     } else {
//         home.classList.remove("highlight")
//     }
//     //about
//     if (window.pageYOffset >= 571 && window.pageYOffset <= 1099) {
//         about.classList.add("highlight")
//     } else {
//         about.classList.remove("highlight")
//     }
//     //skills
//     if (window.pageYOffset >= 1100 && window.pageYOffset <= 1449) {
//         skills.classList.add("highlight")
//     } else {
//         skills.classList.remove("highlight")
//     }
//     //project
//     if (window.pageYOffset >= 1450 && window.pageYOffset <= 1950) {
//         project.classList.add("highlight")
//     } else {
//         project.classList.remove("highlight")
//     }

//     if (window.pageYOffset >= 1951) {
//         contact.classList.add("highlight")
//     } else {
//         contact.classList.remove("highlight")
//     }
// })

bd2.addEventListener('click', () => {
    menu.classList.remove("show")
})

navOpen.addEventListener('click', () => {
    menu.classList.add("show");
})

navClose.addEventListener('click', () => {
    menu.classList.remove("show")
})

navLink.addEventListener('click', () => {
    menu.classList.remove("show")
})



// navbar fixation 
const navHeight = navBar.getBoundingClientRect().height
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    if (scrollHeight > navHeight) {
        navBar.classList.add('fix-nav')
    } else {
        navBar.classList.remove('fix-nav')

    }
})














//GlideJs

// const glide = document.querySelector(".glide")
// if (glide)
//     {
//         new Glide(glide, {
//             type: 'carousel',
//             startAt: 0,
//             perView: 2,
//             gap: 30,
//             hoverpause: true,
//             autoplay: 2000,
//             animationDuration: 800,
//             animationTimingFunc: 'ease-in-out',
//             breakpoints: {
//                 996: {
//                     perView: 2
//                 },
//                 768: {
//                     perView: 1
//                 },
//             },
//         }).mount()
//     }



