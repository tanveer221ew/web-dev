    document.addEventListener('DOMContentLoaded', () => {
        const nav = document.querySelector('.navigation');
        const isHomepage = document.body.classList.contains('homepage'); // Add 'homepage' class to <body> on homepage

        if (!isHomepage) {
            window.addEventListener('mousemove', (e) => {
                if (e.clientY < 100) {
                    nav.classList.remove('hide-navigation');
                } else {
                    nav.classList.add('hide-navigation');
                }
            });
        }
    });
