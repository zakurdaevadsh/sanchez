document.addEventListener('DOMContentLoaded', () => {
    const promo = new Swiper('.banner__promos', {
        slidesPerView: 1,
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });

    const brands = new Swiper('.banner__brands',{
        slidesPerView: 2,
        speed: 400,
        loop: true,
        autoplay: {
            delay: 2500,
        },
        breakpoints: {
            420: {
                slidesPerView: 3
            },
            560: {
                slidesPerView: 4
            },
            700: {
                slidesPerView: 5
            },
            840: {
                slidesPerView: 6
            },
            980: {
                slidesPerView: 7
            },
            1120: {
                slidesPerView: 8
            },
            1260: {
                slidesPerView: 9
            },

        }
    })
})