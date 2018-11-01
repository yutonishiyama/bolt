(function() {
    var menuBtn = document.querySelector('.sp__btn');
    var menuArea = document.querySelector('.btn__contact');

    menuBtn.addEventListener('click', function() {
        menuArea.classList.toggle('is-active');
    }, false);
})();