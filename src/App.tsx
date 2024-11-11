import Nav from "./components/Navbar/Navbar"
import Content from "./components/Content/Content"
import Docs from "./components/Docs/Docs"
import { Flex } from "@chakra-ui/react"

function App() {

  return (
    <Flex direction='column' gap='10px'>
      <Nav />
      <Flex direction={["column", "column", "column"]}>
        <Content />
        <Docs />
      </Flex>
      
    </Flex>
  )
}

export default App