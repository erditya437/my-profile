function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelectorAll('.nav-links li');

    // Toggle menu dan hamburger
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        // Efek fade-in dan slide ke bawah untuk nav-links
        navLinks.style.opacity = "0";
        navLinks.style.transform = "translateY(-20px)";
        setTimeout(() => {
            navLinks.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
            navLinks.style.opacity = "1";
            navLinks.style.transform = "translateY(0)";
        }, 100);

        // Efek fade-in bertahap untuk tiap item
        navItems.forEach((item, index) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(-10px)";
            setTimeout(() => {
                item.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, index * 100);
        });
    } else {
        // Reset animasi saat menu ditutup
        navLinks.style.transition = "none";
        navLinks.style.opacity = "0";
        navLinks.style.transform = "translateY(-20px)";

        navItems.forEach((item) => {
            item.style.transition = "none";
            item.style.opacity = "0";
            item.style.transform = "translateY(-10px)";
        });
    }
}

// Perbaikan: Reset navbar jika kembali ke desktop
function resetNavbarOnResize() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelectorAll('.nav-links li');

    if (window.matchMedia("(min-width: 769px)").matches) {
        // Jika ukuran layar lebih besar dari 768px (desktop), reset navbar
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');

        // Hapus efek opacity dan transform agar navbar muncul normal di desktop
        navLinks.style.transition = "none";
        navLinks.style.opacity = "";
        navLinks.style.transform = "";

        navItems.forEach((item) => {
            item.style.transition = "";
            item.style.opacity = "";
            item.style.transform = "";
        });
    }
}

// Tambahkan event listener saat ukuran layar berubah
window.addEventListener('resize', resetNavbarOnResize);





document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Hapus notifikasi lama jika ada
            let existingNotification = document.querySelector(".notification");
            if (existingNotification) {
                existingNotification.remove();
            }

            // Buat notifikasi baru
            const notification = document.createElement("div");
            notification.classList.add("notification", "show");

            // Tambahkan teks dengan efek neon
            const text = document.createElement("span");
            text.textContent = "Pesan berhasil dikirim! ✔️";

            // Gabungkan ke dalam notifikasi
            notification.appendChild(text);

            // Tambahkan ke dalam body
            document.body.appendChild(notification);

            // Hapus setelah 3 detik
            setTimeout(() => {
                notification.classList.remove("show");
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 3000);

            // Reset formulir
            form.reset();
        });
    }
});









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
