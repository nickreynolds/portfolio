import React from 'react';
import me from '../../img/self4.png';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {info} from "../../info/Info";
// import { motion } from "motion/react";

export default function Home() {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-175px)] motion-preset-slide-down">
         <img 
            className="avatar shadow-lg"
            alt={'Nick Reynolds headshot'} 
            src={me} 
            style={{
               background: info.gradient,
               width: '35vh',
               height: '35vh',
               marginBottom: '1rem',
               marginRight: '0',
               '@media (min-width: 768px)': {
                  width: '40vh',
                  height: '40vh',
                  marginBottom: '0',
                  marginRight: '2rem'
               }
            }}
         />
         <div>
            <h1 className="text-4xl font-bold mb-4">
               Hi, I'm <span className="bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent">{info.firstName}</span>
               <span className="hand">🤚</span>
            </h1>
            <h2 className="text-2xl mb-6">I'm {info.position}.</h2>
            <ul className="p-4">
               {info.miniBio.map((bio, index) => {
                  const delay = index * 0.1;
                  return (
                  <div key={`${bio.emoji}`} style={{animationDelay: `${delay}s`}} className="motion-preset-slide-left">
                     <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
                  </div>
               )})}
            </ul>
            <div className="flex gap-6 justify-center text-4xl md:text-5xl motion-opacity-in-[0%] motion-duration-[1s]/opacity motion-delay-[0.5s]/opacity">
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </div>
         </div>
      </div>
   )
}