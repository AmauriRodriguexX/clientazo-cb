function openModal(id) {
          const modal = document.getElementById(id);
          if (modal) {
               modal.style.display = 'flex';
               setTimeout(() => {
                    modal.classList.add('active');
               }, 10);
               document.body.style.overflow = 'hidden';
          }
     }

     function closeModal(id) {
          const modal = document.getElementById(id);
          if (modal) {
               modal.classList.remove('active');
               document.body.style.overflow = '';
               setTimeout(() => {
                    modal.style.display = 'none';
               }, 400);
          }
     }

     document.addEventListener('DOMContentLoaded', () => {
          const cardIntegrante = document.querySelector('.card-integrante');
          const imgIntegranteMobile = document.querySelector('.img-integrante-mobile');
          const btnNext = document.querySelector('.btn-next');
          const btnBack = document.querySelector('.btn-back');
          let integranteSwiper = null;

          const abrirModal = () => {
               openModal('modalIntegrante');

               if (!integranteSwiper) {
                    integranteSwiper = new Swiper('.integrante-swiper', {
                         slidesPerView: 1,
                         effect: 'fade',
                         fadeEffect: { crossFade: true },
                         speed: 600,
                         pagination: {
                              el: '.swiper-pagination',
                              clickable: true
                         },
                         on: {
                              slideChange: () => {
                                   const isLastSlide = integranteSwiper.realIndex === integranteSwiper.slides.length - 1;
                                   btnNext?.classList.toggle('expand', isLastSlide);
                              }
                         }
                    });
               }
          };

          cardIntegrante?.addEventListener('click', abrirModal);
          imgIntegranteMobile?.addEventListener('click', abrirModal);

          btnNext?.addEventListener('click', () => {
               const isLastSlide = integranteSwiper?.realIndex === integranteSwiper.slides.length - 1;
               if (isLastSlide) {
                    closeModal('modalIntegrante');
               } else {
                    integranteSwiper?.slideNext();
               }
          });

          btnBack?.addEventListener('click', () => {
               integranteSwiper?.slidePrev();
          });
     });