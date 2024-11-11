import { Box, Heading, Flex, Image, Icon, Text } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";

import fitpulse from "../../assets/fitpulse.jpg";
const Nav = () => {
  return (
    <Flex
      bg="white"
      padding="7"
      w="auto"
      h="70px"
      justify="space-between"
      alignItems="center"
    >
      <Flex height="40px" w="50px" alignItems="center" gap="2">
        <Image src={fitpulse} alt="" />
        <Text fontSize="lg" color="blue.500" fontWeight="bold">
          FitPulse
        </Text>
      </Flex>
      <Flex justify="space-between" gap="10" alignItems="center">
        <Heading
          fontSize="18px"
          fontWeight="bold"
          bg="blue.200"
          padding="10px"
          borderRadius="10px"
        >
          Dashboard
        </Heading>
        <Heading fontSize="18px" fontWeight="bold" color="blue.300">
          Activity
        </Heading>
        <Heading fontSize="18px" fontWeight="bold" color="blue.300">
          Statistics
        </Heading>
        <Heading fontSize="18px" fontWeight="bold" color="blue.300">
          Explore
        </Heading>
      </Flex>
      <Box height="40px" w="40px">
        <Icon bg="white" fontSize="25px" color="tomato">
          <BiLogOut />
        </Icon>
      </Box>
    </Flex>
  );
};

export default Nav;
