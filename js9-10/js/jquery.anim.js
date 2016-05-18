// function menu() {
//     var sub = document.querySelector('.dropdown');
//     sub.addEventListener('mouseenter', openMenu);
//     sub.addEventListener('mouseleave', closeMenu);

//     function openMenu() {
//         var subMenu = this.querySelector('.sub-menu');
//         if (subMenu) {
//             subMenu.style.display = 'block';
//             var nextSub = this.querySelector('.dropdown');
//             if (nextSub) {
//                 nextSub.addEventListener('mouseenter', openMenu);
//             }
//         } else {
//             return;
//         }
//     };

//     function closeMenu() {
//         var subMenu = this.querySelector('.sub-menu');
//         if (subMenu) {
//             var fps = 50;

//             var timer = setInterval(function() {
//                             if (!subMenu.style.opacity) {
//                                 subMenu.style.opacity = 1;
//                             }
//                             subMenu.style.opacity = subMenu.style.opacity - 0.05;
//                             if (subMenu.style.opacity <= 0) {
//                                 clearInterval(timer);
//                                 subMenu.style.opacity = 1;
//                                 subMenu.style.display = 'none';
//                             }
//                         }, 1000 / fps)

//             var nextSub = this.querySelector('.dropdown');
//             if (nextSub) {
//                 nextSub.addEventListener('mouseleave', closeMenu);
//             }
//         }
//     };
// }

// document.addEventListener('DOMContentLoaded', menu);

function menu() {
    var subMenu = document.querySelector('.dropdown');
    subMenu.addEventListener('mouseenter', showMenu);
    subMenu.addEventListener('mouseleave', hideMenu);

    function showMenu() {
        var subMenu = this.querySelector('.sub-menu');

        if (subMenu) {
            subMenu.style.display = 'block';
            

            var childMenu = this.querySelector('.dropdown');
            if (childMenu) {
                childMenu.addEventListener('mouseenter', showMenu);
            }
        }
    }

    function hideMenu() {
        var subMenu = this.querySelector('.sub-menu');
    
        if (subMenu) {
            var fps = 50;

            var timer = setInterval(function() {
                            if (!subMenu.style.opacity) {
                                subMenu.style.opacity = 1;
                            }
                            subMenu.style.opacity = subMenu.style.opacity - 0.05;
                            if (subMenu.style.opacity <= 0) {
                                clearInterval(timer);
                                subMenu.style.opacity = 1;
                                subMenu.style.display = 'none';
                            }
                        }, 1000 / fps)

            subMenu.setAttribute("style", "display: none;");
            var childMenu = this.querySelector('.dropdown');
            if (childMenu) {
                childMenu.addEventListener('mouseleave', hideMenu);
            }   
        };
    }
}

document.addEventListener('DOMContentLoaded', menu);