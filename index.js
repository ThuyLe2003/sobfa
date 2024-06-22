document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');
    const hamburgerMenu = document.getElementById('menu');
    const navItems = document.getElementById('nav-items');

    const infoHeaders = document.querySelectorAll('.info-box h3');
    const info = document.querySelectorAll('.info-card p');
    const newsHeaders = document.querySelectorAll('.news-item h3');
    const news = document.querySelectorAll('.news-item p');

    function fixedHeight(nodeList) {
        let maxHeight = 0
        nodeList.forEach(elem => {
            const h = elem.offsetHeight;
            if (h > maxHeight) {
                maxHeight = h;
            }
        })
    
        nodeList.forEach(elem => {
            elem.style.height = `${maxHeight}px`;
        })
    }
    
    function adjustSize() {
        fixedHeight(infoHeaders);
        fixedHeight(info);
        fixedHeight(newsHeaders);
        fixedHeight(news);
    }

    window.onscroll = function() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        navItems.classList.remove('show');
        if (hamburgerMenu.classList.contains('fa-close')) {
            hamburgerMenu.classList.toggle('fa-close');
            hamburgerMenu.classList.toggle('fa-bars');
        
        }
    }

    hamburgerMenu.addEventListener('click', function() {
        navItems.classList.toggle('show');
        hamburgerMenu.classList.toggle('fa-bars');
        hamburgerMenu.classList.toggle('fa-close');
    });

    adjustSize();
    
    window.addEventListener('resize', function() {
        adjustSize();
        this.location.reload(true);
    });
});


