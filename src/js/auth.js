document.addEventListener('DOMContentLoaded', () => {
    const
        formsContainer = document.querySelector('.auth__forms'),
        leftTab = document.querySelector('.auth__tabs-item--left'),
        rightTab = document.querySelector('.auth__tabs-item--right'),
        tabs = document.querySelectorAll('.auth__tabs-item');

    tabs.forEach(tab => tab.addEventListener('click', () => {
        if (tab.classList.contains('auth__tabs-item--left')) {
            formsContainer.classList.remove('active');
            leftTab.classList.add('active');
            rightTab.classList.remove('active');
        } else {
            formsContainer.classList.add('active');
            leftTab.classList.remove('active');
            rightTab.classList.add('active');
        }
    }))
});