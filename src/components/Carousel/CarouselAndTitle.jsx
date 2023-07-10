import React from 'react';
import { Text } from '@nextui-org/react';
import SwiperCarousel from '../SwiperCarousel/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import CardApp from '../CardApp/CardApp';
import useFavorites from '../../hooks/useFavorites';


export const CarouselAndTitle = ({title, data, isLoading}) => {

  const {addFavorite, removeFavorite,isFavorite} = useFavorites();
   
    return (
    <>
    <div style={{
      backgroundColor:"black",
      position:"relative",
      zIndex: 2,
      paddingTop:20,
    }}>
    <Text h3>{title}</Text>
    <SwiperCarousel>
        { !isLoading && data.map((e)=>{
            const path=e.poster_path;            
            const poster_URL="https://image.tmdb.org/t/p/w300"+ path;
                    
            return <SwiperSlide 
                    key={e.id}
                    title={e.title}
                    style={{
                        backgroundColor: "#00000066",
                        width: "200px",
                      }}
                    >
                      <CardApp
                      id={e.id}
                      title={e.title}
                      bg={poster_URL}
                      footer={`★ ${e.vote_average}`}
                      textButtonA="Ver"
                      textButtonB={isFavorite(e.id) ? "★" : "☆"}
                      onPressedButtonB={() => {
                        isFavorite(e.id) ? removeFavorite(e.id) : addFavorite(e.id);
                      }}
                      >

                      </CardApp>
                    
                  </SwiperSlide>
                
                    }
        
        )}
    </SwiperCarousel>
    </div>
    </>
  )
}

export default CarouselAndTitle