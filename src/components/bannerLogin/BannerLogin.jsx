import React from 'react' 
import { Card} from '@nextui-org/react'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'

export const BannerLogin = ({data}) => {

    const [color, setColor] = useState();

    useEffect(() => {
  
      const timer = setTimeout(() => {
        setColor("#D250CE");
      }, ); 
  
   
      return () => clearTimeout(timer);
    }, []);

 
  const banner_URL= "https://image.tmdb.org/t/p/w1280";

  return (
    <>
  <Card   
    css={{
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${banner_URL}${data?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        }}>    
    
    <Card
        css={{
            
            margin: "0vh 0px 0px 0px",
            height: "100vh",
            width:"100%",
            background: "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",          
        }}>
      
      <Card.Header
         css={{
            display: "flex",
            justifyContent: "center",    
            margin: "50vh 0px 0px 0px",
            flexdirection:"column",
            gap: 15          
        }}  >
            <h1>
                TU CONTENIDO FAVORITO,
            </h1>
            <motion.h1
            style={{ color: color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            >
                SUSCRIBITE AHORA
            </motion.h1>
            
        </Card.Header>
      
    </Card>   
    
  </Card>    
        
      
      
    </>
  )
}

export default BannerLogin