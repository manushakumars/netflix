import { Route, Routes, Navigate } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from './store/authUser';
import { useEffect } from "react";
import { Loader } from "lucide-react";
import WatchPage from "./pages/WatchPage";
import SearchPage from "./pages/SearchPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";
import NotFoundPage from "./pages/404";

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

      {/* Route to Watch -> "./pages/WatchPage" */}
      <Route path='/watch/:id' element={user ? <WatchPage/> : <Navigate to={"/login"} /> } />

       {/* Route to SearchPage -> "./pages/SearchPage" */}
       <Route path='/search' element={user ? <SearchPage/> : <Navigate to={"/login"} /> } />

       {/* Route to SearchHistoryPage -> "./pages/SearchHistoryPage" */}
       <Route path='/history' element={user ? <SearchHistoryPage/> : <Navigate to={"/login"} /> } />

       <Route path='/*' element={<NotFoundPage /> } />
    
    </Routes>
    
    <Footer/>

    <Toaster />
   </>
  );
}

export default  App;