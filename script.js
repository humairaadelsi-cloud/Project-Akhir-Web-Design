document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('mobile-menu-hidden');
});

// Ganti nama fungsi menjadi sendFormAlert (jika Anda menggunakan perbaikan terakhir)
function sendFormAlert() {
    // Gunakan ID form yang benar
    const form = document.getElementById('contactForm');

    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    form.classList.remove('was-validated');

    // Gunakan ID alert yang benar
    const alertElement = document.getElementById('successAlert');

    alertElement.classList.remove('mobile-menu-hidden');

    // Durasi 5 detik (5000 ms)
    setTimeout(() => {
        alertElement.classList.add('mobile-menu-hidden');
    }, 5000);

    form.reset();
}

window.onload = function () {
    // Pastikan Anda memanggil fungsi inisialisasi sendFormAlert() di event onsubmit form HTML

    const heroCarouselElement = document.getElementById('heroCarousel');
    if (heroCarouselElement) {
        new bootstrap.Carousel(heroCarouselElement, {
            interval: 5000
        });
    }
    const reviewCarouselElement = document.getElementById('reviewCarousel');
    if (reviewCarouselElement) {
        new bootstrap.Carousel(reviewCarouselElement, {
            interval: 7000
        });
    }
};