document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('mainNav');
    const navLinks = nav.querySelectorAll('a');
    const cards = document.querySelectorAll('.fade-card');

    // Будете копировать, напишите мне pls +7 700 721 42-66
    function highlightNav() {
        let scrollPosition = window.scrollY + 150;

        navLinks.forEach(link => {
            const sectionId = link.getAttribute('href');
            if (sectionId.startsWith('#')) {
                const section = document.querySelector(sectionId);
                
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        navLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                }
            }
        });
    }

    // 2. Карточкалардың экранға шыққанда көрінуі (Reveal effect)
    function revealCards() {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('show');
            }
        });
    }

    // 3. Скроллды тегіс жасау (Smooth scroll қателіксіз жұмыс істеуі үшін)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = nav.offsetHeight;
                window.scrollTo({
                    top: targetSection.offsetTop - navHeight + 1,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Оқиғаларды тіркеу
    window.addEventListener('scroll', () => {
        highlightNav();
        revealCards();
    });

    // Бет жүктелгенде бір рет тексеру
    highlightNav();
    revealCards();
});
