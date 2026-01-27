import React from "react";
import { images } from "../../utilities/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Gallery(): React.JSX.Element {
  return (
    <div className="  relative w-full border border-primary rounded-xl p-4 sm:p-2 md:p-6 text-center ">
      <div className="max-w-7xl mx-auto px-4 mb-4 ">
        <h2 className="text-3xl text-primary font-bold mb-2 font-serif">
          Nuestra Galería
        </h2>
        <p className="text-muted">Desliza para ver más</p>
      </div>

      <Swiper
        spaceBetween={20} // Espacio en pixeles entre fotos
        loop={true} // Para que sea infinito
        centeredSlides={false} // false = alineado a la izquierda, true = la activa al centro
        navigation={false} // Activa la navegación en ambos lados
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        // Breakpoints: Responsividad del carrusel
        breakpoints={{
          // Celulares: 1 foto
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // Tablets: 2 fotos
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Desktop: 3 fotos
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-100 md:h-120 px-4 rounded-2xl " // Altura específica del slider
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            {" "}
            {/* Padding bottom para los puntitos */}
            <div className="w-full h-full overflow-hidden rounded-2xl border border-white/10 ">
              <img
                src={`/images/${image}`}
                alt={`Slide ${image}`}
                // Hover effect: Zoom suave al pasar el mouse
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-120"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
