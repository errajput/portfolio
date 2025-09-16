//mobile toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// initialize EmailJS
// (function () {
//   emailjs.init("dishacsevira@gmail.com");
// })();

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector(".contact-form");

//   if (form) {
//     form.addEventListener("submit", function (e) {
//       e.preventDefault();

//       emailjs
//         .send("dishacsevira@gmail.com", "dishacsevira@gmail.com", {
//           from_name: document.getElementById("name").value,
//           from_email: document.getElementById("email").value,
//           message: document.getElementById("message").value,
//         })
//         .then(
//           () => {
//             alert("Message sent successfully!");
//             form.reset();
//           },
//           (error) => {
//             alert("Failed to send message. Please try again.");
//             console.error(error);
//           }
//         );
//     });
//   }
// });
