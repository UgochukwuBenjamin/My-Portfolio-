import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './componets/LoadingScreen' 
import { Navbar } from './componets/Navbar';
import { MobileMenu } from './componets/MobileMenu';
import { Home } from './componets/sections/Home';
import { About } from './componets/sections/About'; 
import { Project } from './componets/sections/Project'; 
import { Contact } from './componets/sections/Contact';
import { Footer } from './componets/sections/Footer';
import './index.css';
function App() {

  const [isloading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return(
   <> 
{!isloading && <LoadingScreen onComplete={() => setIsLoading(true)} />}{" "}
  <div className={`min-h-screen transition-opacity duration-200
    ${isloading ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
    <Navbar menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
    <MobileMenu menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
       <Home/>
       <About/>
       <Project/>
        <Contact/>
        <Footer/>
    </div>
  </>
  );
  
};

export default App
