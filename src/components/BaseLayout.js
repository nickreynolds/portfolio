import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";

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
      <Box className={`min-h-screen w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
         <Grid container className="flex flex-col min-h-screen justify-between">
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
            </Grid>
            <Grid item className="flex-grow">
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} className="flex flex-col items-center py-6 opacity-70 w-full">
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

