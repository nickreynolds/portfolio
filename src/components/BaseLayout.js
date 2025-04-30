import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
      <div className={`min-h-screen w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
         <div container className="flex flex-col min-h-screen justify-between">
            <div item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
            </div>
            <div item className="flex-grow">
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
               </Routes>
            </div>
            <div item>
               <div component={'footer'} className="flex flex-col items-center py-6 opacity-70 w-full">
               </div>
            </div>
         </div>
      </div>
   )
}

