import React, { useState, useEffect } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { Button } from "./Button";

export const MobileBtn = ({m}) => {
  const [mobShowButton, setMobShowButton] = useState(true);

  useEffect(() => {
    // Function to handle screen size changes
    function handleResize() {
      
      setMobShowButton(window.innerWidth < 768);
    }

    // Add event listener to window resize event
    window.addEventListener("resize", handleResize);

    // Initial call to handleResize
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Flex
    //   mx={{ base: 5, sm: 10, md: "6rem", lg: "8rem" }}
      alignItems={"center"}
      justifyContent={{ base: "center", md: "space-between" }}
      m={'2rem 0 7rem 0'}
    >
      {mobShowButton && <Button />}
    </Flex>
  );
};
