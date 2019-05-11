if (document.querySelector(".order-form") !== null) {
  let form = document.querySelector(".order-form");

  let firstName = form.querySelector("[name=first-name]");
  let secondName = form.querySelector("[name=second-name]");
  let phone = form.querySelector("[name=phone]");
  let email = form.querySelector("[name=email]");

  let isStorageSupport = true;
  let firstNameStorage, secondNameStorage, phoneStorage, emailStorage;

  try {
    firstNameStorage = localStorage.getItem("first-name");
    secondNameStorage = localStorage.getItem("second-name");
    phoneStorage = localStorage.getItem("phone");
    emailStorage = localStorage.getItem("email");
  } catch (e) {
    isStorageSupport = false;
  }

  firstName.oninput = function () {
    if (firstName.value) {
      firstName.classList.remove("order-form__field--invalid");
    }
  };

  secondName.oninput = function () {
    if (secondName.value) {
      secondName.classList.remove("order-form__field--invalid");
    }
  };

  phone.oninput = function () {
    if (phone.value) {
      phone.classList.remove("order-form__field--invalid");
    }
  };

  email.oninput = function () {
    if (email.value) {
      email.classList.remove("order-form__field--invalid");
    }
  };

  if (firstNameStorage) {
    firstName.value = firstNameStorage;
  }

  if (secondNameStorage) {
    secondName.value = secondNameStorage;
  }

  if (phoneStorage) {
    phone.value = phoneStorage;
  }

  if (emailStorage) {
    email.value = emailStorage;
  }

  firstName.removeAttribute("required");
  secondName.removeAttribute("required");
  phone.removeAttribute("required");
  email.removeAttribute("required");

  phone.onfocus = function (evt) {
    if (!phone.value) {
      phone.value = "+7 ";
    }
  };

  form.addEventListener("submit", function (evt) {

    let phoneNumber = phone.value.replace(/\s/g, "");
    phoneNumber = phoneNumber.replace("+", "");
    phoneNumber = ++phoneNumber;

    if (!firstName.value || !secondName.value || !phone.value || !email.value || isNaN(++phoneNumber) || phoneNumber > 79999999999 || phoneNumber < 79000000000) {

      evt.preventDefault();

      form.classList.remove("order-form--invalid");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("order-form--invalid");

    } else {

      if (isStorageSupport) {
        localStorage.setItem("first-name", firstName.value);
        localStorage.setItem("second-name", secondName.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("email", email.value);
      }

    }

    if (!firstName.value) {
      firstName.classList.add("order-form__field--invalid");
    }

    if (!secondName.value) {
      secondName.classList.add("order-form__field--invalid");
    }

    if (!phone.value) {
      phone.classList.add("order-form__field--invalid");
    }

    if (!email.value) {
      email.classList.add("order-form__field--invalid");
    }

    if (isNaN(++phoneNumber) || phoneNumber > 79999999999 || phoneNumber < 79000000000) {
      phone.classList.add("order-form__field--invalid");
    }
  });
}
