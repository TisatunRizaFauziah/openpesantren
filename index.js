// Ambil elemen-elemen HTML yang akan digunakan
const listProv = document.getElementById("prov"); // Select box untuk daftar provinsi
const listKab = document.getElementById("kab"); // Select box untuk daftar kota/kabupaten
const listPonpes = document.getElementById("hasil"); // Container untuk menampilkan daftar pesantren

// Fungsi untuk mengisi daftar provinsi pada saat halaman dimuat
function listProvv() {
  // Ambil data provinsi dari API menggunakan fetch
  fetch("https://api-pesantren-indonesia.vercel.app/provinsi.json")
    .then((resp) => resp.json())
    .then((bebas) => {
      // Buat opsi default "Pilih Provinsi"
      const defaultOption = document.createElement("option");
      defaultOption.textContent = "Pilih Provinsi";
      defaultOption.value = "";
      listProv.appendChild(defaultOption);

      // Tambahkan opsi untuk setiap provinsi dari data yang diambil
      for (let fee of bebas) {
        const option = document.createElement("option");
        option.textContent = fee.nama;
        option.value = fee.id;
        listProv.appendChild(option);
      }
    });
}

// Fungsi untuk mengisi daftar kota/kabupaten ketika provinsi dipilih
function changelistKab() {
  let selProv = listProv.options[listProv.selectedIndex].value;
  while (listKab.options.length > 1) {
    listKab.remove(1);
  }

  if (selProv) {
    // Ambil data kota/kabupaten berdasarkan provinsi yang dipilih dari API menggunakan fetch
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Pilih Kota";
    defaultOption.value = "";
    listKab.appendChild(defaultOption);

    fetch(
      "https://api-pesantren-indonesia.vercel.app/kabupaten/" +
        selProv +
        ".json"
    )
      .then((resp) => resp.json())
      .then((bebas) => {
        // Tambahkan opsi untuk setiap kota/kabupaten dari data yang diambil
        for (let dee of bebas) {
          const option = document.createElement("option");
          option.textContent = dee.nama;
          option.value = dee.id;
          listKab.appendChild(option);
        }
      });
  }
}

// Fungsi untuk menampilkan daftar pesantren ketika kota/kabupaten dipilih
function changeListPon() {
  let selKab = listKab.options[listKab.selectedIndex].value;

  // Hapus daftar pesantren yang sebelumnya ditampilkan
  while (listPonpes.firstChild) {
    listPonpes.removeChild(listPonpes.firstChild);
  }

  if (selKab) {
    // Ambil data pesantren berdasarkan kota/kabupaten yang dipilih dari API menggunakan fetch
    fetch(
      "https://api-pesantren-indonesia.vercel.app/pesantren/" + selKab + ".json"
    )
      .then((resp) => resp.json())
      .then((bebas) => {
        // Buat elemen tabel untuk menampilkan data pesantren
        const table = document.createElement("table");
        table.classList.add("data-table"); // Tambahkan kelas CSS 'data-table' untuk styling tabel (Anda dapat mendefinisikan gaya dalam file CSS terpisah)

        // Buat baris header tabel
        const headerRow = document.createElement("tr");
        const headers = ["ID", "Nama", "NSPP", "Alamat"];

        for (let header of headers) {
          const th = document.createElement("th");
          th.textContent = header;
          headerRow.appendChild(th);
        }

        table.appendChild(headerRow);

        // Buat baris tabel untuk setiap pesantren
        for (let dee of bebas) {
          const row = document.createElement("tr");
          const values = [dee.id, dee.nama, dee.nspp, dee.alamat];

          for (let value of values) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
          }

          table.appendChild(row);
        }

        // Tambahkan tabel ke dalam container 'hasil' untuk menampilkan daftar pesantren
        listPonpes.appendChild(table);
      });
  }
}

// Panggil fungsi listProvv() setelah DOM dimuat untuk mengisi daftar provinsi awal
document.addEventListener("DOMContentLoaded", listProvv);

// Tambahkan event listener pada listProv untuk menangani perubahan pilihan provinsi
listProv.addEventListener("change", function () {
  changelistKab();
});

// Tambahkan event listener pada listKab untuk menangani perubahan pilihan kota/kabupaten
listKab.addEventListener("change", function () {
  changeListPon();
});

// Fungsi untuk mengelola langganan (subscribe) email
document
  .getElementById("subscribeButton")
  .addEventListener("click", function () {
    subscribe();
  });


// index.js

// Ambil elemen menu hamburger dan daftar menu navigasi
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".navbar");

// Tambahkan event listener untuk mengaktifkan menu hamburger
menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Sembunyikan menu navigasi ketika salah satu link di dalamnya diklik (untuk tampilan perangkat seluler)
const navLinks = document.querySelectorAll(".navbar a:not(.menu-icon)");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


