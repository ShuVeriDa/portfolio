import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {MyContacts} from "./MyContacts/MyContacts";
import {Footer} from "./Footer/Footer";
import {DistantWork} from "./DistantWork/DistantWork";
import {MyWorks} from "./MyWorks/MyWorks";

function App() {
   return (
      <div className='App'>
         <Header/>
         <Main/>
         <Skills/>
         <MyWorks />
         <DistantWork />
         <MyContacts />
         <Footer />
      </div>
   );
}

export default App;
