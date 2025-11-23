// -------------------------------------------------
// Mobile Menu
// -------------------------------------------------
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('mobile-menu-hidden');
});

// -------------------------------------------------
// Form Alert + Popup Konfirmasi Kebijakan (DIPERBAIKI)
// -------------------------------------------------
function sendFormAlert() {
    const form = document.getElementById('contactForm');

    // Jika form tidak valid → tampilkan feedback
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    form.classList.remove('was-validated');

    // 🔥 BUKAN langsung tampilkan alert
    // Tapi buka modal dulu seperti contoh bookingForm

    const policyModalElement = document.getElementById("confirmPolicyModal");
    const policyModal = new bootstrap.Modal(policyModalElement);

    policyModal.show(); // → tampilkan popup konfirmasi
}

// -------------------------------------------------
// Popup Konfirmasi Kebijakan
// -------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

    const openPolicyBtn = document.getElementById("openPolicyModal");
    const policyModalElement = document.getElementById("confirmPolicyModal");

    // Tombol manual untuk memunculkan modal (opsional)
    if (openPolicyBtn && policyModalElement) {
        const policyModal = new bootstrap.Modal(policyModalElement);
        openPolicyBtn.addEventListener("click", () => {
            policyModal.show();
        });
    }

    // Tombol "Saya Setuju"
    const confirmBtn = document.getElementById("btnConfirmPolicy");
    const alertElement = document.getElementById('successAlert');

    if (confirmBtn) {
        confirmBtn.addEventListener("click", function () {

            console.log("Pengguna menyetujui kebijakan.");

            // menutup modal
            const modal = bootstrap.Modal.getInstance(document.getElementById("confirmPolicyModal"));
            if (modal) modal.hide();

            // 🔥 tampilkan alert seperti contoh showAlert()
            alertElement.classList.remove('mobile-menu-hidden');

            // auto hide
            setTimeout(() => {
                alertElement.classList.add('mobile-menu-hidden');
            }, 5000);

            // reset form jika perlu
            const form = document.getElementById('contactForm');
            if (form) form.reset();
        });
    }
});

// -------------------------------------------------
// Carousel Initialization
// -------------------------------------------------
window.onload = function () {

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
