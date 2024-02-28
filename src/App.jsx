import React from "react";
import { Box, Heading, Flex, Grid, GridItem } from "@chakra-ui/react";
import desktopHero from "./assets/desktop/image-hero.jpg";
import mobileHero from "./assets/mobile/image-hero.jpg";
import { ButtonHandle, Creation, Footer, Leader, MobileBtn, Nav, images } from "./Components";

function App() {
  return (
    <Box>
      <Box
        className="hero"
        bgImage={{ base: `${mobileHero}`, md: `${desktopHero}` }}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize={"cover"}
        px={{ base: "3rem", sm: "5rem", lg: "8rem" }}
        pb={10}
      >
        <Nav />
        <Box
          w={{ base: "15rem", sm: "23rem", md: "25rem", lg: "28rem" }}
          border="2px"
          borderColor="gray.200"
          mt={"3rem"}
          mb={"5rem"}
        >
          <Heading
            p={{ base: "5", md: "10" }}
            textTransform={"uppercase"}
            fontFamily={"Alata"}
            letterSpacing={5}
            fontWeight={300}
            fontSize={{
              base: "1.2rem",
              sm: "2rem",
              md: "2.3rem",
              lg: "2.8rem",
            }}
          >
            Immersive experiences that deliver
          </Heading>
        </Box>
      </Box>
      <Leader />
      <ButtonHandle />
      <Grid templateColumns={{base: 'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} mt={'2rem'} gap={7} px={{base: '2rem', lg: '8rem'}}>
        <Creation desImg={images.desDeep} mobImg= {images.mobDeep} txt={'Deep earth'}/>
        <Creation desImg={images.desArcade} mobImg= {images.mobArcade}txt={'Night arcade'}/>
        <Creation desImg={images.desSoccer} mobImg= {images.mobSoccer}txt={'Soccer team VR'}/>
        <Creation desImg={images.desGrid} mobImg= {images.mobGrid}txt={'The grid'}/>
        <Creation desImg={images.desFromAbove} mobImg= {images.mobFromAbove}txt={'From up above VR'}/>
        <Creation desImg={images.desPocket} mobImg= {images.mobPocket}txt={'Pocket borealis'}/>
        <Creation desImg={images.desCuriosity} mobImg= {images.mobCuriosity}txt={'The curiosity'}/>
        <Creation desImg={images.desFisheye} mobImg= {images.mobFisheye}txt={'Make it fisheye'}/>
      </Grid>
      <MobileBtn/>

     <Footer/>
    </Box>
  );
}

export default App;
