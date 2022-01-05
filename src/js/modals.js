document.addEventListener('DOMContentLoaded', () => {

    const
        modalOverlay = document.querySelector('.modal-overlay'),
        openModalButtons = document.querySelectorAll('.open-modal'),
        closeModalButtons = document.querySelectorAll('.close-modal'),
        openModal = (modal) => {
            modalOverlay.classList.add('opened-overlay');
            modal.classList.add('opened-modal');
        },
        closeModal = () => {
            modalOverlay.classList.remove('opened-overlay');
            document.querySelector('.opened-modal').classList.remove('opened-modal');
        };

    openModalButtons.forEach( btn => {
        btn.addEventListener('click', () => {
            const
                target = btn.getAttribute('target-id'),
                modal = document.querySelector('[modal-id='+target+']');
            openModal(modal);
        })
    });

    closeModalButtons.forEach(btn => btn.addEventListener('click', closeModal));

});