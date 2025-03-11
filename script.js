//this function is made for scroll button
let scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        scrollBtn.style.display = "block";  // Button dikhana
    } else {
        scrollBtn.style.display = "none";   // Button hide karna
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

}

//this is code is use to send email
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitform");

    if (submitButton) {  // ✅ Ensure button exists before adding event listener
        submitButton.addEventListener("click", async function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form values
            const name = document.getElementById("fname").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();

            // Basic validation
            if (!name || !email || !phone || !message) {
                Swal.fire({
                    title: "Error!",
                    text: "All fields are required.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
                return;
            }

            const formData = { name, email, phone, message };

            try {
                const response = await fetch("https://formsubmit.co/inkwebstudioz@gmail.com", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    Swal.fire({
                        title: "Success!",
                        text: "Your message has been sent.",
                        icon: "success",
                        confirmButtonText: "OK"
                    });

                    // Reset form fields after success
                    document.getElementById("contactForm").reset();
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Something went wrong. Please try again.",
                        icon: "error",
                        confirmButtonText: "OK"
                    });
                }
            } catch (error) {
                Swal.fire({
                    title: "Oops!",
                    text: "Network error. Please check your connection.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            }
        });
    } else {
        console.error("❌ ERROR: Button with ID 'submitform' not found!");
    }
});


// this is code is use to open and close the menu
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
}

//this is active page links code
console.log("JavaScript is running!"); // Debugging step

const links = document.querySelectorAll(".right a");
const currentPath = window.location.pathname.split("/").pop();

links.forEach(link => {
    const linkPath = link.getAttribute("href").split("/").pop();
    console.log(`Checking: ${linkPath} vs ${currentPath}`);

    if (linkPath === currentPath) {
        link.classList.add("active");
        console.log(`Active class added to: ${link.innerText}`);
    }
});

//this is the scroll animation trigger 
gsap.registerPlugin(ScrollTrigger);

// Animating the text content
gsap.from(".content1", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
        trigger: ".banner",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        markers: false // <-- Set to false to remove markers
    }
});

gsap.from(".content2", {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".banner",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        markers: false // <-- Set to false to remove markers
    }
});



