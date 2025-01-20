import { Route, Routes, Navigate } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from './store/authUser';
import { useEffect } from "react";
import { Loader } from "lucide-react";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  console.log("auth user is here:", user);

  useEffect(() => {
     authCheck();
  }, [authCheck]);

if (isCheckingAuth) {
  return (
    <div className='h-screen'>
      <div className='flex justify-center items-center bg-black h-full'>
        <Loader className='animate-spin text-red-600 size-10'/>
      </div>
    </div>
  );
}
  return (
   <>
    <Routes>
      
      {/* Route to HomePage -> "./pages/home/HomePage" */}
      <Route path='/' element={<HomePage/>} />

      {/* Route to Login Page -> "./pages/LoginPage" */}
      <Route path='/login' element={!user ? <LoginPage/> : <Navigate to={"/"} />} />
      
      {/* Route to Signup -> "./pages/SignupPage" */}
      <Route path='/signup' element={!user ? <SignupPage/> : <Navigate to={"/"} /> } />
    
    </Routes>
    
    <Footer/>

    <Toaster />
   </>
  );
}

export default  App;