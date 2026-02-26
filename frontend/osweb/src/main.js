
const warnUserPopup = document.querySelector(".Warn-user-popup");
const downloadBtnBedrock = document.querySelector(".download-btn-bedrock");
const closeBtn = document.querySelector(".close-popup-btn");

if (warnUserPopup && closeBtn) {
  closeBtn.addEventListener("click", () => {
    warnUserPopup.style.display = "none";
  });
}

if (warnUserPopup && downloadBtnBedrock) {
  downloadBtnBedrock.addEventListener("click", () => {
    warnUserPopup.style.display = "block";
  });
}





