// 1. Gelişmiş AOS Aktivasyonu (Hassasiyet Ayarlı)
AOS.init({
    duration: 900,
    offset: 80,
    once: true,
    easing: 'ease-out-cubic',
    delay: 50,
});

// 2. Typed.js Aktivasyonu - Türkçe Metinler
// Hata oluşmaması için kontrol
if (document.getElementById('typed-text')) {
    const typed = new Typed('#typed-text', {
        strings: [
            'Mekatronik Mühendisi.',
            'Veri Otomasyon Uzmanı.',
            'No-Code Geliştirici.',
            'Gömülü Sistem Tasarımcısı.'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// 3. Otomatik Yıl Güncelleme
if (document.getElementById('year')) {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// 4. Kaydırma Çubuğu Efekti (Navbar Glassmorphism Update)
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-2xl', 'glass-nav-scrolled');
    } else {
        navbar.classList.remove('shadow-2xl', 'glass-nav-scrolled');
    }
});
