document.querySelectorAll(".more-link").forEach(button => {
  button.addEventListener("click", (event) => {
    // Mengambil elemen deskripsi dan container
    const moreDesc = button.previousElementSibling; // Elemen .more-desc
    const container = button.closest('.s2'); // Container (elemen .s2)

    // Toggle "expanded" class untuk menampilkan/menyembunyikan konten
    if (moreDesc.classList.contains("expanded")) {
      moreDesc.classList.remove("expanded");
      button.textContent = "Read More";
      
      // Atur tinggi container kembali ke nilai normal
      container.style.height = "250px"; // Kembalikan ukuran kontainer ke nilai awal
    } else {
      moreDesc.classList.add("expanded");
      button.textContent = "Read Less";
      
      // Sesuaikan tinggi kontainer agar sesuai dengan konten yang diperluas
      container.style.height = container.scrollHeight + "px"; // Sesuaikan tinggi dengan konten yang muncul
    }

    // Menghentikan propagasi event click agar tidak memicu event click luar
    event.stopPropagation();
  });
});

// Event listener untuk menutup semua "more-desc" jika klik di luar
document.addEventListener("click", (event) => {
  document.querySelectorAll(".more-desc").forEach(moreDesc => {
    if (!moreDesc.contains(event.target) && !moreDesc.previousElementSibling.contains(event.target)) {
      moreDesc.classList.remove("expanded");
      moreDesc.previousElementSibling.textContent = "Read More";
      
      // Kembalikan tinggi kontainer ke nilai awal
      moreDesc.closest('.s2').style.height = "250px";
    }
  });
});
