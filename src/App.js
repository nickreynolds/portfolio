import React from 'react';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import './index.css';

function App() {
   return (
      <div className="min-h-screen">
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}

export default App;
