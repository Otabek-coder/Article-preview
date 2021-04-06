const share_btn = document.querySelector(".share");
const underArrow = document.querySelector(".under-arrow");
const img_share = document.querySelector(".img-share");

share_btn.addEventListener("click", () => {
  share_btn.style.background = "hsl(217, 19%, 35%)";
});

function myFunction() {
  const cns_box = document.querySelector(".cns-box");
  const proPic = document.querySelector(".profile-pic");
  const details = document.querySelector(".details");
  if (cns_box.style.display === "none") {
    cns_box.style.display = "flex";

  } else {
    cns_box.style.display = "none";
  }
  
}

share_btn.addEventListener("click", myFunction);
