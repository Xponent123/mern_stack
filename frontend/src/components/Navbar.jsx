import { Container, Flex, HStack, Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import React from 'react'
import {IoMoon} from 'react-icons/io5';
import {LuSun} from 'react-icons/lu';
import { useProductStore } from '../store/product';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return(
     <Container maxW={"1140px"} px={4} bg={useColorModeValue("gray.100", "gray.900")}>
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        md: "row"
      }}
    >
      <Text
        fontSize={{ base: "22", sm: "28" }}
      fontWeight={"bold"}
      textTransform={"uppercase"}
      textAlign={"center"}
      bgGradient={"linear(to-r, cyan.400, blue.500)"}
      bgClip={"text"}
      >
    <Link to={"/"}>Product Store</Link>
    </Text>
    <HStack spacing={2} alignItems={"center"}>  
      <Link to={"/create"}>
      <Button>
        <PlusSquareIcon fontSize={20}/>  
      </Button>
      </Link>
      <Button  onClick={toggleColorMode}> 
        {colorMode === "light" ? <IoMoon /> : <LuSun size='20'/>}  
        </Button>
    </HStack>
  </Flex>
  </Container >

  )
}


export default Navbar;