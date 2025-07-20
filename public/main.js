document.addEventListener("DOMContentLoaded", () => {
    // Memilih semua section dengan kelas .hero, termasuk yang baru
    const heroSections = document.querySelectorAll(".hero");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Jika section terlihat
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    // Memantau semua section .hero (termasuk .hero.new-section)
    heroSections.forEach((section) => {
        observer.observe(section);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const sponsorSection = document.querySelector(".sponsor");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                sponsorSection.classList.add("visible");
            }
        });
    });

    observer.observe(sponsorSection);
});

