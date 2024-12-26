import { Box } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import { useProductStore } from "./store/product"
function App() {

  return (
    <Box minH={"100vh"}>
     
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
     
    </Box>
    
  );
}

export default App