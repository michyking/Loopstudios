import React, { useState, useEffect } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { Button } from "./Button";

export const ButtonHandle = () => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    // Function to handle screen size changes
    function handleResize() {
      // Set showButton based on screen width
      setShowButton(window.innerWidth > 768); // Adjust the value according to your desired screen width
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
      mx={{ base: 5, sm: 10, md: "6rem", lg: "8rem" }}
      alignItems={"center"}
      justifyContent={{ base: "center", md: "space-between" }}
    >
      <Heading
        className="header-font"
        textTransform={"uppercase"}
        color={"hsl(0, 0%, 41%)"}
        fontSize={{ base: "1.2rem", sm: "2rem", md: "2.3rem", lg: "2.8rem" }}
      >
        Our creations
      </Heading>
      {showButton && <Button />}
    </Flex>
  );
};
