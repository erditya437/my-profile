document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Hapus agar bisa muncul lagi
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(el => observer.observe(el));
});






// Fungsi menampilkan loading sebelum pindah ke projek.html
function showLoader(event) {
    event.preventDefault(); // Cegah pindah halaman langsung
    const loader = document.getElementById("loader");
    const progressBar = document.querySelector(".progress");

    loader.classList.remove("hidden"); // Tampilkan loader
    progressBar.style.width = "100%"; // Jalankan loading bar

    setTimeout(() => {
        window.location.href = event.target.href; // Pindah halaman setelah loading selesai
    }, 3000); // Delay 1.5 detik
}

// Fungsi menghilangkan loader setelah halaman selesai dimuat (projek.html)
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hidden"); // Sembunyikan loader setelah halaman siap
    }, 500);
});