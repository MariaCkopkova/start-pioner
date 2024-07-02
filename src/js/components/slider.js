
import Swiper, {Navigation, Pagination} from 'swiper'
Swiper.use([Navigation, Pagination]);
const gap = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--gap"));
console.log(gap)
const el = document.querySelector('.news-slider');
const swiper = new Swiper(el, {
        slidesPerView: 1,
        loop: true,
        spaceBetween: gap,
        breakpoints: {
                1025: {
                        slidesPerView: 3,
                }
        }
});
