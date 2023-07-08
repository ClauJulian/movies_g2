
import React from 'react'
import { Card, Text, Col, Button, useTheme, Spacer } from '@nextui-org/react'

export const Banner = ({data}) => {

    const { theme } = useTheme();
    const banner_URL= "https://image.tmdb.org/t/p/w1280";

  return (
    <Card
        css={{
            display: "flex",
            justifyContent: "space-between",
            height: "80vh",
            width: "100%",
            backgroundImage: `url(${banner_URL}${data?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
    >
        <Card
        css={{
            
            margin: "0vh 0px 0px 0px",
            height: "100vh",
            width:"50%",
            background: "linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",          
        }}
        >
      <Card.Header
        css={{         
          margin: "35vh 0px 0px 20px",
          transition: "all 0.3s ease-in-out",
          height: "20%",
          
        }}
        >
        <Col>
          <Text h1 size={50} color="rgba(255,255,255)" >
            {data?.title}
          </Text>
        </Col>
      </Card.Header>

      <Card.Footer
        css={{
         margin: "0vh 0px 2px 20px",
          height: "50%",
          width:"65%",          
        }}
      >
        <Col>
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

          <Spacer y={1} />

           <Button
            css={{
              backgroundColor: theme.colors.secondary.value,  
              color: theme.colors.text.value,
                
            }}>
            Ver Ahora
          </Button> 
        </Col>

        
      </Card.Footer>

      </Card>
        
    </Card>
  )
}

export default Banner