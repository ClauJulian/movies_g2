import React from 'react';
import { Text } from '@nextui-org/react';
import SwiperCarousel from '../SwiperCarousel/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';

export const CarouselAndTitle = ({title, data, isLoading}) => {
   
    return (
    <>
    <Text h3>{title}</Text>
    <SwiperCarousel>
        { !isLoading && data.map((movie)=>{
                    
            const path=movie.poster_path;            
            const poster_URL="https://image.tmdb.org/t/p/w300"+ path;
                    
            return <SwiperSlide 
                    key={movie.id}
                    title={movie.title}
                    style={{
                        background: "transparent",
                        width: "200px",
                      }}
                    >
                    <img src={poster_URL} alt="poster"/> 
                  </SwiperSlide>
                
                    }
        
        )}
    </SwiperCarousel>
    </>
  )
}

export default CarouselAndTitle