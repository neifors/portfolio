import React from 'react'
import * as Pages from './pages';
import {Routes, Route} from 'react-router-dom'
import { Layout } from './layout';
import './App.css';


const App = () => {
   return (
     <>
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Pages.Homepage/>}/>
        <Route path="projects" element={<Pages.Projects/>}/>
        <Route path="skills" element={<Pages.Skills/>}/>
      </Route>
     </Routes>
     </>
   )
};

export default App;
