document.addEventListener('DOMContentLoaded', () => {

    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dd => {
        const input = dd.querySelector('.dropdown__input-item');
        dd.querySelector('.dropdown__input').addEventListener('click', () => {
            dd.classList.toggle('opened');
        });
        dd.querySelectorAll('.dropdown__container-item').forEach(item => {
            item.addEventListener('click', () => {
                input.value = item.textContent;
                dd.classList.remove('opened');
            });
        });
    })

    $('#pagination').pagination({
        dataSource: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        pageSize: 1,
        autoHidePrevious: true,
        autoHideNext: true,
        pageRange: 1,
        callback: function(data, pagination) {
            console.log(data);
            console.log(pagination);
        }
    });

});