var menuLink = document.querySelectorAll('.menu-btn');
var body = document.querySelector('body');
var overlay = document.createElement('div');
var sideArea = document.querySelector('.side-area');

menuLink.forEach((menuBtn) => {

    menuBtn.addEventListener('click', function(e) {
        var menuOverlay = document.querySelector('.menu-overlay');

        if(menuOverlay) {
            menuOverlay.classList.remove('fadeOut');
            sideArea.classList.remove('slideOut');
            setTimeout(() => {
                menuOverlay.className = '';
                menuOverlay.remove();
                return;
            }, 500);
        }
        else {
            overlay.classList.add('menu-overlay');
            sideArea.classList.add('slideOut');
            body.appendChild(overlay);

            overlay.addEventListener('click', function() {
                overlay.classList.add('fadeOut');
                sideArea.classList.remove('slideOut');

                setTimeout(() => {
                    overlay.className = '';
                    overlay.remove();
                    return;
                }, 500);
            })
        } 
    });
});