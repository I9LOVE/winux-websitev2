const warnUserPopup = document.querySelector(".Warn-user-popup");
const downloadBtnBedrock = document.querySelector(".download-btn-bedrock");
const closeBtn = document.querySelector(".close-popup-btn");


document.querySelectorAll(".password-wrap").forEach((wrap) => {
  const passwordInput = wrap.querySelector("input");
  const toggleButton = wrap.querySelector(".password-toggle");
  const rulesMessage = wrap.parentElement.querySelector(".password-rules");
  const form = wrap.closest("form");

  if (!passwordInput) {
    return;
  }

  const validatePassword = () => {
    const value = passwordInput.value;
    const errors = [];

    if (value.length < 8) {
      errors.push("at least 8 characters");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      errors.push("one symbol");
    }

    if (errors.length > 0) {
      passwordInput.setCustomValidity(`Password needs ${errors.join(" and ")}.`);
      if (rulesMessage) {
        rulesMessage.textContent = "Password needs 8+ characters and one symbol.";
        rulesMessage.classList.add("is-invalid");
        rulesMessage.classList.remove("is-valid");
      }
      return;
    }

    passwordInput.setCustomValidity("");
    if (rulesMessage) {
      rulesMessage.textContent = "Password looks good.";
      rulesMessage.classList.add("is-valid");
      rulesMessage.classList.remove("is-invalid");
    }
  };

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      const showing = passwordInput.type === "text";
      passwordInput.type = showing ? "password" : "text";
      toggleButton.textContent = showing ? "Show" : "Hide";
      toggleButton.setAttribute("aria-label", showing ? "Show password" : "Hide password");
    });
  }

  passwordInput.addEventListener("input", validatePassword);

  if (form) {
    form.addEventListener("submit", (event) => {
      validatePassword();
      if (!passwordInput.checkValidity()) {
        event.preventDefault();
        passwordInput.reportValidity();
      }
    });
  }
});



