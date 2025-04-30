import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      const currentTheme = localStorage.getItem('theme');
      let oppositeOfCurrentDarkMode = currentTheme === 'dark' ? 'light' : 'dark';
      console.log(oppositeOfCurrentDarkMode);
      if (oppositeOfCurrentDarkMode === 'dark') {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
      setDarkMode(oppositeOfCurrentDarkMode === 'dark');
   }

   useEffect(() => {
      const currentTheme = localStorage.getItem('theme');
      setDarkMode(currentTheme === 'dark')
   }, [])

   return (
      <div className={`min-h-screen w-full bg-background text-foreground`}>
         <div className="flex flex-col min-h-screen justify-between">
            <div>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
            </div>
            <div className="flex-grow">
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
               </Routes>
            </div>
            <div>
               <footer className="flex flex-col items-center py-6 opacity-70 w-full">
               </footer>
            </div>
         </div>
      </div>
   )
}

