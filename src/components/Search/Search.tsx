import { Box, HStack, Input, Icon, Image } from "@chakra-ui/react"
import { BiSearch, BiBell } from "react-icons/bi"
import avatar from '../../assets/avatar.png'

const Search = () => {
  return (
    <HStack bg='white' h='auto' w='auto' padding='10px' margin='2' border='10x solid blue' borderRadius='20px'>
        <Box bg='white' height="50px" w="40px" padding='10px'>
          <Icon bg='white' fontSize='40px'>
             <BiSearch />
          </Icon>
        </Box>
        <Input bg='white' paddingLeft='2' color='black' variant='flushed' placeholder="Search..." />
        <Box height="50px" w="50px" padding='10px'>
          <Icon bg='white' fontSize='35px'>
            <BiBell />
          </Icon>
        </Box>
        <Box height="50px" w="50px">
          <Image bg='white' height='50px' src={avatar} alt="" />
        </Box>
    </HStack>
  )
}

export default Search
