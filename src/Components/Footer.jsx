import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import "../Styles/footer.css";

export const Footer = () => {
  return (
    <Flex
      bg={"black"}
      color={"white"}
      py={"2rem"}
      px={{ base: "2rem", sm: "4rem", lg: "8rem" }}
      justifyContent={{base: 'center', md: "space-between"}}
      flexDirection={{base: 'column', md: 'row'}}
      alignItems={'center'}
    >
      <Box>
        <Heading size={"md"}>Loopstudios</Heading>
        <Flex gap={4} mt={"1rem"} flexDirection={{base: 'column', md: 'row'}} justifyContent={'center'} alignItems={'center'}>
          <a href="#" className="footer-nav footer-text">
            About
          </a>
          <a href="#" className="footer-nav footer-text">
            Careers
          </a>
          <a href="#" className="footer-nav footer-text">
            Events
          </a>
          <a href="#" className="footer-nav footer-text">
            Products
          </a>
          <a href="#" className="footer-nav footer-text">
            Support
          </a>
        </Flex>
      </Box>
      <Box mt={{base: '2rem', md: 0}}>
        <Flex fontSize={'20px'} gap={4} justifyContent={{base: 'center', md: 'flex-end'}}>
          <Text className="footer-nav"> 
            <FaFacebook />
          </Text>
          <Text className="footer-nav">
            <FaTwitter />
          </Text>
          <Text className="footer-nav">
          <FaPinterest />
          </Text>
          <Text className="footer-nav">
          <FaInstagram />
          </Text>
        </Flex>
        <Text mt={'1rem'}>@ 2024 Loopstudios. All rights resevered</Text>
      </Box>
    </Flex>
  );
};
