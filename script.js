function toggleDetail(element) {
  const moreDesc = element.nextElementSibling;
  const parent = element.closest(".s2"); // Ambil elemen induk .s2
  moreDesc.classList.toggle("expanded");
  parent.classList.toggle("active"); // Tambahkan kelas active pada elemen induk
  element.innerHTML = moreDesc.classList.contains("expanded")
    ? "tutup &laquo;"
    : "detail &raquo;";
}
