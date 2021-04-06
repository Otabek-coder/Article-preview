const share_btn = document.querySelector(".share");

share_btn.addEventListener("click", () => {
});

function myFunction() {
  const cns_box = document.querySelector(".cns-box");
  
  if (cns_box.style.display === "none") {
    cns_box.style.display = "flex";

  } else {
    cns_box.style.display = "none";
  }
  
}

share_btn.addEventListener("click", myFunction);
