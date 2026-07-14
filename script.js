/* =========================
   MOBILE MENU
========================= */


const menuButton = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");


if(menuButton){

    menuButton.addEventListener("click", function(){

        navLinks.classList.toggle("active");

    });

}




/* =========================
   FADE-IN SCROLL ANIMATION
========================= */


const fadeElements = document.querySelectorAll(".fade-in");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach((entry)=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{


    threshold:0.2


});



fadeElements.forEach((element)=>{

    observer.observe(element);

});





/* =========================
   TIME-BASED GREETING
========================= */


const heroText = document.querySelector(".hero-text p");


if(heroText){


    let hour = new Date().getHours();

    let greeting;


    if(hour < 12){

        greeting = "Good Morning! ";

    }

    else if(hour < 18){

        greeting = "Good Afternoon! ";

    }

    else{

        greeting = "Good Evening! ";

    }



    heroText.innerHTML = greeting + heroText.innerHTML;


}





/* =========================
   CONTACT FORM VALIDATION
========================= */


const contactForm = document.getElementById("contact-form");


if(contactForm){


    contactForm.addEventListener("submit", function(event){


        event.preventDefault();



        let name = document.querySelector(
            "input[type='text']"
        ).value;



        let email = document.querySelector(
            "input[type='email']"
        ).value;



        if(name === "" || email === ""){


            alert(
                "Please complete all required fields."
            );


        }


        else if(!email.includes("@")){


            alert(
                "Please enter a valid email address."
            );


        }


        else{


            alert(
                "Thank you! Your message has been sent."
            );


            contactForm.reset();


        }



    });


}