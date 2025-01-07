const profileImg = document.getElementById('profile-img');
const about = document.querySelectorAll('.about');
const header = document.querySelectorAll('.header');
const links = document.querySelectorAll('.links');
const portfolio = document.querySelectorAll('.portfolio');

profileImg.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

window.onload = function () {
    header.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 300);
    });

    links.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 300);
    });
};

[...header, ...links, ...about, ...portfolio].forEach((el, index) => {
    setTimeout(() => {
        observer.observe(el);
    }, index * 200);
});