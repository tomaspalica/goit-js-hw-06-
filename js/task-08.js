const form = document.querySelector(".login-form");

const submitHendler = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  }
  event.currentTarget.reset();
};

form.addEventListener("submit", submitHendler);
