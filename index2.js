// Setelah DOM selesai dimuat, tambahkan event listener untuk mengatur interaksi dengan menu navigasi
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon"); // Ambil elemen menu hamburger
  const navMenu = document.querySelector(".nav-menu"); // Ambil elemen daftar menu navigasi

  // Fungsi untuk mengganti status tampilan menu navigasi (muncul/sembunyi)
  function toggleMenu() {
    navMenu.classList.toggle("show"); // Toggle kelas CSS 'show' untuk mengganti status tampilan menu navigasi
  }

  // Event listener untuk klik pada ikon menu hamburger
  menuIcon.addEventListener("click", toggleMenu);

  // Event listener untuk klik di luar menu navigasi agar menu ditutup
  document.addEventListener("click", function (event) {
    // Cek apakah target klik bukan berada di dalam menu hamburger dan bukan di dalam menu navigasi
    if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove("show"); // Hapus kelas CSS 'show' untuk menyembunyikan menu navigasi
    }
  });

  // Event listener untuk mengatur ulang menu navigasi saat jendela diubah ukurannya (untuk tampilan layar yang lebih besar)
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("show"); // Hapus kelas CSS 'show' untuk menyembunyikan menu navigasi
    }
  });
});
