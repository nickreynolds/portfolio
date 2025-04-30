import React from 'react';
import me from '../../img/self4.png';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
// import { motion } from "motion/react";

export default function Home() {
   return (
      <Box component={'main'} className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-175px)]">
         <Box 
            className="avatar shadow-lg"
            alt={'image of developer'} 
            style={{background: info.gradient}} 
            component={'img'} 
            src={me} 
            sx={{
               width: {xs: '35vh', md: '40vh'},
               height: {xs: '35vh', md: '40vh'},
               marginBottom: {xs: '1rem', sm: 0},
               marginRight: {xs: 0, md: '2rem'}
            }}
         />
         <Box>
            <h1 className="text-4xl font-bold mb-4">
               Hi, I'm <span className="bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent">{info.firstName}</span>
               <span className="hand">🤚</span>
            </h1>
            <h2 className="text-2xl mb-6">I'm {info.position}.</h2>
            <Box component={'ul'} className="p-4">
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box className="flex gap-6 justify-center text-4xl md:text-5xl">
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}