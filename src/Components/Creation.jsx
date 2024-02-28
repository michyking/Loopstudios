import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export const Creation = ({ desImg, mobImg, txt }) => {
  return (
    <Box
    width={"auto"}
    cursor={'pointer'}
    position={'relative'}
  >
    <Image
      src={mobImg}
      alt="Mobile Image"
      display={{ base: "block", md: "none" }}
      objectFit="cover"
      width={"100%"}
    />
    {/* Desktop Image */}
    <Image
      src={desImg}
      alt="Desktop Image"
      display={{ base: "none", md: "block" }}
      objectFit="cover"
      width={"100%"}
    />
    {/* Text */}
    <Text
      textTransform={"uppercase"}
      color={"white"}
      fontSize={{base: '1rem', lg: "1.3rem"}}
      position="absolute"
      bottom={"2rem"}
      padding={'1px 3rem 1px 4rem'}
    >
      {txt}
    </Text>
  </Box>
  );
};



{/* <Box
bgImg={{ base: `${mobImg}`, md: `${desImg}` }}
backgroundSize={"cover"}
backgroundPosition={"center"}
backgroundRepeat={"no-repeat"}
minHeight={"70vh"}
width={"auto"}
cursor={'pointer'}
>
<Text
  textTransform={"uppercase"}
  mt={"20rem"}
  mx={"3rem"}
  color={"white"}
  fontSize={"1.5rem"}
>
  {txt}
</Text>
</Box> */}

// export const Creation = ({ desImg, mobImg, txt }) => {
//   return (
    // <Box
    //   minHeight={"70vh"}
    //   width={"auto"}
    //   cursor={'pointer'}
    // >
    //   {/* Mobile Image */}
    //   <Image
    //     src={mobImg}
    //     alt="Mobile Image"
    //     display={{ base: "block", md: "none" }}
    //     objectFit="cover"
    //     minHeight={"70vh"}
    //     width={"100%"}
    //   />
    //   {/* Desktop Image */}
    //   <Image
    //     src={desImg}
    //     alt="Desktop Image"
    //     display={{ base: "none", md: "block" }}
    //     objectFit="cover"
    //     minHeight={"70vh"}
    //     width={"100%"}
    //   />
    //   {/* Text */}
    //   <Text
    //     textTransform={"uppercase"}
    //     mt={"20rem"}
    //     mx={"3rem"}
    //     color={"white"}
    //     fontSize={"1.5rem"}
    //     position="absolute"
    //     zIndex={1}
    //   >
    //     {txt}
    //   </Text>
    // </Box>
//   );
// };
