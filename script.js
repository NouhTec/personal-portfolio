// 1. تفعيل تأثيرات الظهور عند التمرير (AOS)
AOS.init({
    duration: 800,
    offset: 50,
    once: true,
    easing: 'ease-out-cubic',
});

// 2. تفعيل تأثير الكتابة التلقائية (Typed.js)
const typed = new Typed('#typed-text', {
    strings: [
        'مهندس ميكاترونكس.',
        'مطور تطبيقات No-Code.',
        'مختص بأتمتة البيانات.',
        'مصمم أنظمة مدمجة.'
    ],
    typeSpeed: 50, // سرعة الكتابة
    backSpeed: 30, // سرعة المسح
    backDelay: 2000, // فترة الانتظار قبل مسح الكلمة
    loop: true, // تكرار لا نهائي
    showCursor: true,
    cursorChar: '|'
});

// 3. تحديث سنة حقوق النشر في الفوتر تلقائياً
document.getElementById('year').textContent = new Date().getFullYear();

// 4. تغيير شكل شريط التنقل عند النزول للأسفل
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});