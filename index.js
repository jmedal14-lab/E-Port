// template_29fowbi
// service_dggs3zw
// HvFD2z8yh10r5WnL0

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_dggs3zw",
      "template_29fowbi",
      event.target,
      "HvFD2z8yh10r5WnL0",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
      console.log("it worked 1");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on Jmedal14@gmail.com",
      );
    });
}
let isModalOpen = false;
function toggleModal() {
  if(isModalOpen) {
    isModalOpen= false;
    return document.body.classList.remove('modal--open');
  }
  isModalOpen = true;
  document.body.classList += " modal--open"
}
