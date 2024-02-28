import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import img from "../assets/desktop/image-interactive.jpg";
export const Leader = () => {
  return (
    <Box
      m={{ base: 5, sm: 10, md: "6rem", lg: "8rem" }}
      display={{ base: "block", lg: "flex" }}
    >
      <Image src={img} />
      <Box
        bg={"white"}
        w={{ base: "auto", lg: "33rem" }}
        px={{ base: "2rem", lg: "5rem" }}
        pt={{ base: "2rem", lg: "5rem" }}
        pos={{ base: "static", lg: "absolute" }}
        // bottom={-1}
        mt={{ base: 0, lg: "9.5rem" }}
        right={{ base: 0, lg: "2rem", xl: "8rem", "2xl": "20rem" }}
        // zIndex={999}
      >
        <Heading
          className={"header-font"}
          textTransform={"uppercase"}
          color={"hsl(0, 0%, 41%)"}
          textAlign={{ base: "center", lg: "left" }}
          fontSize={{ base: "1.2rem", sm: "2rem", md: "2.3rem", lg: "2.8rem" }}
        >
          The leader in interactive VR
        </Heading>
        <Text
          className={"text-font"}
          mt={"20px"}
          textAlign={"justify"}
          // fontSize={"0.9rem"}
          // letterSpacings={"0.05em"}
          color={"hsl(0, 0%, 55%)"}
        >
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </Text>
      </Box>
    </Box>
  );
};

// export default Leader
