import React from 'react';
import {Box} from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const {text} = props;

   return (
      <Box component={'section'} 
           className="w-[80%] md:w-1/2 rounded-lg mb-16 shadow-lg bg-[#27242f]"
           borderRadius={'0.5rem'}>
         <Box className="bg-[#8c8c8c] p-2 rounded-t-lg text-base">
            <i className={`${iconClass} text-red-500`}/>
            <i className={`${iconClass} text-yellow-500`}/>
            <i className={`${iconClass} text-green-500`}/>
         </Box>
         <Box className="py-4 md:py-8 px-8 md:px-12 rounded-b-lg text-xl font-mono">
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;