// let sections = document.querySelectorAll('section');

// window.onscroll = () =>{
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;

//         if(top >= offset && top < offset + height){
//             sec.classList.add('show-animation');
//         }
//         else{
//             sec.classList.remove('show-animation');
//         }
//     })
// }

ScrollReveal({
    reset: false,
    distance: '30px', 
    opacity: 0,
    duration: 1000,
    delay: 300,            
})
ScrollReveal().reveal(".brand, .nav-link", {
    origin: "left",
    delay : 300,
    // interval: 200,
})
ScrollReveal().reveal(".nav-link", {
    origin : "bottom",
    delay : 300,
    interval: 200,
})
ScrollReveal().reveal(".first-img", {
    origin : "bottom",
    delay : 300,
    interval:300,
})
ScrollReveal().reveal(".contact", {
    origin : "left",
    delay : 500,
    interval:700,
})
ScrollReveal().reveal(".with", {
    origin : "left",
    delay : 300,
    interval:300,
})
ScrollReveal().reveal(".junior", {
    origin : "left",
    delay : 400,
    interval:300,
})
ScrollReveal().reveal(".dev", {
    origin : "left",
    delay : 500,
    interval:300,
})
ScrollReveal().reveal(".you", {
    origin : "left",
    delay : 600,
    interval:300,
})
ScrollReveal().reveal(".sec-section", {
    origin: "bottom", 
    delay : 400, 
    interval: 200,
})
ScrollReveal().reveal(".hobby-items", {
    origin : "left", 
    delay : 300, 
    interval: 300,
})
ScrollReveal().reveal(".about", {
    origin : "top", 
    delay :300, 
    interval :200,
})
ScrollReveal().reveal(".progress", {
    origin : "left",
    delay : 300,
    interval:400,
})
// ScrollReveal(),reveal(".me", {
//     origin: "left", 
//     delay : 300, 
//     interval:200,
// })
// ScrollReveal(),reveal(".em", {
//     origin: "left", 
//     delay : 300, 
//     interval:200,
// })
ScrollReveal().reveal(".edu" , {
    origin :"left", 
    delay : 300, 
    interval:200,
})
ScrollReveal().reveal(".skill", {
    origin : "right", 
    delay : 300, 
    interval :300,
})
ScrollReveal().reveal("button", {
    origin : "left", 
    delay:300, 
    interval:300, 
})
ScrollReveal().reveal(".love", {
    origin: "bottom", 
    delay :300, 
    interval: 300,
})
ScrollReveal().reveal(".card", {
    origin : "left", 
    delay : 300, 
    interval: 300,
})
ScrollReveal().reveal("img", {
    origin : "left", 
    delay : 300, 
    interval: 300,
    // duration: 100,
})
ScrollReveal().reveal("p", {
    origin :"left",
    delay:300, 
    interval:300,
})
ScrollReveal().reveal(".ahkara", {
    origin : "left", 
    delay : 300, 
    interval:500,
})
ScrollReveal().reveal(".para", {
    origin : "left",
    delay : 300,
    interval:300,
})
ScrollReveal().reveal("a", {
    origin : "bottom",
    delay : 300,
    interval:500,
})
