// Variabel untuk status pendaftaran
let isRegistrationOpen = false; // Awalnya pendaftaran ditutup

// Tentukan tanggal dan waktu pendaftaran
const countdownDate = new Date("November 14, 2024 00:00:00").getTime();

function formatTime(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  if (timeLeft > 0) {
    // Pendaftaran masih dibuka
    isRegistrationOpen = true;
    document.getElementById("register-btn").style.pointerEvents = "auto"; // Tombol Register aktif
    document.getElementById("register-btn").classList.remove("opacity-50"); // Hapus efek non-aktif
  } else {
    // Pendaftaran sudah ditutup
    isRegistrationOpen = false;
    document.getElementById("register-btn").style.pointerEvents = "auto"; // Tombol Register tetap bisa diklik
    document.getElementById("register-btn").classList.add("opacity-50"); // Tombol Register tampak non-aktif
    clearInterval(countdownInterval); // Hentikan countdown jika waktu sudah habis

    document.getElementById("expired-message").classList.remove("hidden");
  }

  // Update countdown timer (set 0 jika waktu sudah habis)
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (timeLeft > 0) {
    days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  }

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
}
// Fungsi untuk menangani klik tombol Register
function handleRegister() {
  if (!isRegistrationOpen) {
    // Jika pendaftaran ditutup, tampilkan popup
    document.getElementById("popup-closed").style.display = "flex";
  } else {
    // Jika pendaftaran dibuka, arahkan ke halaman daftar
    window.location.href = "daftar-lomba-uiux.html";
  }
}

// Fungsi untuk menutup popup
function closePopup() {
  document.getElementById("popup-closed").style.display = "none";
}

// Set interval untuk memperbarui countdown setiap detik
const countdownInterval = setInterval(updateCountdown, 1000);

//buku panduan
document
  .querySelector(".buku-panduan-btn")
  .addEventListener("click", function () {
    window.open("Techvolution_UI_UX_Designing.pdf", "_blank");
  });
