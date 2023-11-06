`use strict`;

// ACCORDION FUNCTIONALITY

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordion-icon").textContent = "+";
      }
    });

    item.classList.toggle("active");
    const icon = item.querySelector(".accordion-icon");
    icon.textContent = item.classList.contains("active") ? "x" : "+";
  });
});

// FORM FUNCTIONALITY

const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const messageInput = document.querySelector(".text");
const emailError = document.querySelector(".email-error");
const nameError = document.querySelector(".name-error");
const messageError = document.querySelector(".message-error");

nameInput.addEventListener("focus", () => {
  nameInput.style.border = "2px solid rgba(130, 130, 130, 1)";
});

nameInput.addEventListener("blur", () => {
  const nameValue = nameInput.value.trim();
  if (nameValue.length >= 4) {
    nameInput.style.border = "1px solid rgba(14, 172, 0, 1)";
    hideNameError();
  } else {
    nameInput.style.border = "1px solid rgba(235, 87, 87, 1)";
    displayNameError();
  }
});

emailInput.addEventListener("focus", () => {
  emailInput.style.border = "1px solid rgba(130, 130, 130, 1)";
});

emailInput.addEventListener("blur", () => {
  const emailValue = emailInput.value.trim();
  if (!isValidEmail(emailValue)) {
    emailInput.style.border = "1px solid rgba(235, 87, 87, 1)";
    displayEmailError();
  } else {
    emailInput.style.border = "1px solid rgba(14, 172, 0, 1)";
    hideEmailError();
  }
});

messageInput.addEventListener("focus", () => {
  messageInput.style.border = "1px solid rgba(130, 130, 130, 1)";
});

messageInput.addEventListener("blur", () => {
  const messageValue = messageInput.value.trim();
  if (messageValue.length >= 20) {
    messageInput.style.border = "1px solid rgba(14, 172, 0, 1)";
    hideMessageError();
  } else {
    messageInput.style.border = "1px solid rgba(235, 87, 87, 1)";
    displayMessageError();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayEmailError() {
  emailError.style.color = "rgba(235, 87, 87, 1)";
  emailError.textContent = "Incorrect email type";
}

function hideEmailError() {
  emailError.style.color = "transparent";
  emailError.textContent = "";
}

function displayNameError() {
  nameError.style.color = "rgba(235, 87, 87, 1)";
  nameError.textContent = "Name must be at least 4 characters";
}

function hideNameError() {
  nameError.style.color = "transparent";
  nameError.textContent = "";
}

function displayMessageError() {
  messageError.style.color = "rgba(235, 87, 87, 1)";
  messageError.textContent = "Message must be at least 20 characters";
}

function hideMessageError() {
  messageError.style.color = "transparent";
  messageError.textContent = "";
}
