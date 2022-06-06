import React from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import {InputForm} from "./InputForm";
import {PolicyPage} from "./policy";

import {routesPaths} from "./routes";
import {Navigation} from "./navigation";
import {Rick} from "./Rick";

function App() {
  
  return (
    <div className="App">
        <div className="App">

            <Navigation/>
            <Routes>
                <Route path='/' element={<InputForm defaultValue={'hello form'}/>}/>
                <Route path='*' element={<div>404</div>}/>
                <Route path={`/${routesPaths.about}`} element={<div>Pierwsze, cenne doświadczenia z React. Dzięki, Maćku!</div>}/>
                <Route path='/policy' element={<PolicyPage/>}/>
                <Route path='/form' element={<div>Aspiruję do bycia programistką :D</div>}/>
                <Route path='/Rick' element={<Rick/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
