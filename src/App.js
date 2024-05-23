
import './App.css';
//import Buttonpg from './pages/button';
//import Testpage from './pages/testpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegistration from './pages/LoginRegistration';
import Registration from './pages/Registration';
import Home from './pages/home';
import Profilepage from './pages/Profilepage';
import Settings from './pages/settings';

function App() {
  return (
    <>

     <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LoginRegistration />} />  {/* Login form on root path */}
          <Route path="/register" element={<Registration />} />  {/* Registration form on /register path */}
          <Route path="/home" element={<Home/>}/>
         <Route path='/profilepage' element={<Profilepage/>}/>
         <Route path='/settings' element={<Settings></Settings>}/>
        </Routes>
      </BrowserRouter>

  
    
    </>
    


  
    
  );
}

export default App;
