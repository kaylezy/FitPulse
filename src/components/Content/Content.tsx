import Search from "../Search/Search"
import Dash from "../Dashboard/Dashboard"
import { Box } from "@chakra-ui/react"

const Content = () => {
  return (
    <Box direction={['column', 'column', 'column']} w={['auto', 'auto', 'auto']} h='auto'>
      <Search />
      <Dash />
    </Box>
  )
}

export default Content
