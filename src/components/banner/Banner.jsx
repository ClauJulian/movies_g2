
import React from 'react'
import { Card, Text, Col, Button, useTheme, Spacer } from '@nextui-org/react'
import {motion, useScroll, useTransform, } from 'framer-motion'

export const Banner = ({data}) => {

  const {scrollYProgress} = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 600])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  

  const { theme } = useTheme();
  const banner_URL= "https://image.tmdb.org/t/p/w1280";

  return (
    <>
<motion.div
  initial={{opacity: 0}}
  animate={{opacity: 2}}
  exit={{opacity:0}}
  transition={{duration:2}}
  style={{
    opacity,
    y      
      }}      
      >
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
            width:"50%",
            background: "linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",          
        }}>
      <Card.Header
        css={{         
          margin: "30vh 0px 0px 20px",
          transition: "all 0.3s ease-in-out",
          height: "20%",
          
        }}
        >
        <Col>
          <motion.div
          style={{
            opacity
          }}
          >
              <Text h1 size={50} color="rgba(255,255,255)" >
                  {data?.title}
                </Text>
          </motion.div>
        </Col>
      </Card.Header>

      <Card.Footer
        css={{
          margin: "-10vh 0px 2px 20px",
          height: "40%",
          width:"65%",          
        }}
      >
        <Col>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 2}}
          exit={{opacity:0}}
          transition={{duration:3}}
          opacity
          >
        <Text
            size={15}
            color={theme.colors.text.value}
          >
            {data?.overview?.length > 300
              ? data?.overview?.substring(0, 200) + "..."
              : data?.overview}
          </Text>
          <Text size={25}>
            ★ {data?.vote_average}
          </Text>
          </motion.div>

          <Spacer y={1} />
          <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity:0}}
          transition={{duration:3}}
          style={{   
            opacity
          }}
          
          >
          <Button 
            css={{
              backgroundColor: theme.colors.secondary.value,  
              color: theme.colors.text.value,     
            }}>
            Ver Ahora
          </Button> 
          
          </motion.div>
        </Col>    
      </Card.Footer>
    </Card>   
  </Card>    
</motion.div>  
    
      
      
    </>
  )
}

export default Banner