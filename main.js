const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
// Redirect link handlers
// document.getElementById("home-link").addEventListener("click", () => {
//     window.location.href = "home.html"; // Redirect to home page
// });

// document.getElementById("about-link").addEventListener("click", () => {
//     window.location.href = "about.html"; // Redirect to about page
// });

// document.getElementById("services-link").addEventListener("click", () => {
//     window.location.href = "services.html"; // Redirect to services page
// });

// document.getElementById("portfolio-link").addEventListener("click", () => {
//     window.location.href = "portfolio.html"; // Redirect to portfolio page
// });

// document.getElementById("contact-link").addEventListener("click", () => {
//     window.location.href = "contact.html"; // Redirect to contact page
// });
document.getElementById("linkedin-link").addEventListener("click",() => {
    window.location.href ="www.linkedin.com/in/darshan-jadhav-4a671326a";
});
document.getElementById("instagram-link").addEventListener("click",() => {
    window.location.href ="https://www.instagram.com/invites/contact/?igsh=1eh5qgp9ymrc&utm_content=iazxyve";
});

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar'); 

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('fa-xmark');
//     navbar.classList.toggle('active');
// };

// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;  
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navlinks.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
//             });
//         }
//     });

//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100); // Fixed toggle syntax

//     menuIcon.classList.remove('fa-xmark');
//     navbar.classList.remove('active');
// };

// const form = document.querySelector('form');

// function sendEmail(){
//     Email.send({
//         Host : "smtp.mailendo.com",
//         Username : "username",
//         Password : "password",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }