const itemsList = document.querySelector('#items_list')

document.querySelector('#order-show-items').addEventListener('click', () => {
    itemsList.classList.toggle('opened')
})
