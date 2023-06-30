import React from 'react'
import { Card, Text, Col, Button, useTheme, Grid } from '@nextui-org/react'

export const Banner = ({data}) => {

    const { theme } = useTheme();
    const banner_URL= "https://image.tmdb.org/t/p/w1280";

    console.log(data);
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
            
            margin: "10vh 0px 0px 15px",
            height: "60vh",
            width:"350px",
            backgroundColor: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(10px)"
        }}
        >
        <Card.Header
        css={{
        //   backgroundColor: "rgba(0,0,0,0.5)",
        //   backdropFilter: "blur(10px)",
        //   transition: "all 0.3s ease-in-out",
        }}
        >
        <Col>
          <Text h1 color="rgba(255,255,255,0.5)">
            {data?.title}
          </Text>
        </Col>
      </Card.Header>

      <Card.Footer
        css={{
        //   backgroundColor: ishover ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
        //   backdropFilter: ishover ? "blur(10px)" : "blur(0px)",
        //   transition: "all 0.3s ease-in-out",
          height: "50%",
        }}
      >
        <Col>
          <Text
            h4
            color={theme.colors.text.value}
          >
            {data?.overview?.length > 300
              ? data?.overview?.substring(0, 200) + "..."
              : data?.overview}
          </Text>
          <Text
            // color={ishover ? theme.colors.text.value : "rgba(255,255,255,0.5)"}
            h3
          >
            ★ {data?.rating}
          </Text>
           <Button
            css={{
              backgroundColor: theme.colors.secondary.value,  
              color: theme.colors.text.value,
                
            }}>
            {/* auto
            onPress={() => {
              openModal({
                content: <Details id={data?.id} title={data?.title} />,
              });
            }}
          > */} 
            Ver Ahora
          </Button>
        </Col>
      </Card.Footer>

      </Card>
        
    </Card>
  )
}

export default Banner