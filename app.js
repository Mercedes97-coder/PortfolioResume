/*template_ezdiruc*/
//service_mio1c6l
//Yr2lFBhszZyrySqkP

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_mio1c6l",
      "template_ezdiruc",
      event.target,
      "Yr2lFBhszZyrySqkP"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at mercedesmccann9@gmail.com."
      );
    });
}


