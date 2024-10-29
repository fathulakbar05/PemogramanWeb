const countdownDate = new Date("December 14, 2024 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").innerText = String(seconds).padStart(
      2,
      "0"
    );
  } else {
    document.getElementById("countdown").innerText =
      "Pendaftaran Telah Ditutup";
  }
}

setInterval(updateCountdown, 1000);

//buku panduan
document
  .querySelector(".buku-panduan-btn")
  .addEventListener("click", function () {
    window.open("Techvolution_UI_UX_Designing.pdf", "_blank");
  });
