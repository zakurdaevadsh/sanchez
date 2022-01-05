document.addEventListener('DOMContentLoaded', () => {
    const
        header = document.querySelector('header.header'),
        naviLinks = header.querySelectorAll('.header__navi-item'),
        closeSubmenu = header.querySelector('.js-submenu-close'),
        showSubmenu = () => {
            header.classList.remove('show-submenu');
            setTimeout(()=> {
                header.classList.add('show-submenu');
            }, 100);
        },
        hideSubmenu = () => {
            header.classList.remove('show-submenu');
        };

    naviLinks.forEach(link => link.addEventListener('click', showSubmenu));
    closeSubmenu.addEventListener('click', () => {
        hideSubmenu();
        clearSubmenuItems();
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header__submenu')) hideSubmenu();
    });

    const
        submenuItems = header.querySelectorAll('.header__submenu-item'),
        clearSubmenuItems = () => submenuItems.forEach(item => item.classList.remove('item-opened'));

    submenuItems.forEach(item => {
        const label = item.querySelector('.header__submenu-label:not(a)');
        if (label) label.addEventListener('click', () => item.classList.toggle('item-opened'));
    });

    const
        burgerBtn = header.querySelector('.js-burger-btn'),
        burgerCross = header.querySelector('.js-burger-cross');

    burgerBtn.addEventListener('click', () => header.classList.add('show-mobile-burger'));
    burgerCross.addEventListener('click', () => {
        header.classList.remove('show-mobile-burger');
        clearSubmenuItems();
    });
})