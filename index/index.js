// Event listener untuk tombol subscribe
document.getElementById("subscribe-Button").addEventListener("click", function() {
    subscribe();
  });
  
  // Fungsi untuk mengelola subscribe
  function subscribe() {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value;
  
    if (isValidEmail(email)) {
      // Jika email valid, tampilkan pesan berhasil berlangganan
      alert("Terima kasih telah berlangganan!");
      // Di sini Anda dapat menambahkan kode untuk mengelola proses langganan, misalnya mengirim email ke server.
      // Namun, dalam contoh ini, hanya ditampilkan pesan alert sebagai contoh.
    } else {
      // Jika email tidak valid, tampilkan pesan kesalahan
      alert("Harap masukkan alamat email yang valid.");
    }
  }
  
  // Fungsi untuk memeriksa apakah email valid menggunakan regular expression (regex)
  function isValidEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }