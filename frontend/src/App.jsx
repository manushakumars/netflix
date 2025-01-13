import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
   <>
    <Routes>
      
      {/* Route to HomePage -> "./pages/home/HomePage" */}
      <Route path='/' element={<HomePage/>} />

      {/* Route to Login Page -> "./pages/LoginPage" */}
      <Route path='/login' element={<LoginPage/>} />
      
      {/* Route to Signup -> "./pages/SignupPage" */}
      <Route path='/Signup' element={<SignupPage/>} />
    
    </Routes>
    
    <Footer/>

    <Toaster />
   </>
  )
}

export default  App;