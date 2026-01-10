import React from 'react';
import { Button } from '../ui/Button'; 
import { useNavigate } from 'react-router-dom';
import { images } from '../../utilities/data';

// 1. Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Quitamos EffectFade, dejamos solo los necesarios
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// 2. Estilos: Ya no necesitamos 'effect-fade'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Gallery(): React.JSX.Element {
  const navigate = useNavigate();

  

  return (
    // Aumenté la altura a h-[400px] o h-[500px] para que se luzca el carrusel
    <div className="relative w-full py-1">
      
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-3xl text-primary font-bold mb-2">Nuestra Galería</h2>
        <p className="text-muted">Desliza para ver más</p>
      </div>

      <Swiper
        // CONFIGURACIÓN DE CARRUSEL
        spaceBetween={20} // Espacio en pixeles entre fotos
        loop={true} // Para que sea infinito
        centeredSlides={false} // false = alineado a la izquierda, true = la activa al centro
        navigation={true} 
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
        className="w-full h-[400px] px-4" // Altura específica del slider
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className=""> {/* Padding bottom para los puntitos */}
            <div className="w-full h-full overflow-hidden rounded-2xl border border-white/10  group">
              <img 
                src={img} 
                alt={`Slide ${index}`} 
                // Hover effect: Zoom suave al pasar el mouse
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Opcional: Overlay interno en cada tarjeta si quieres texto dentro */}
              {/* <div className="absolute inset-0  group-hover:bg-transparent transition-all duration-300" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}