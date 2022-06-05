import React from 'react';
import {Routes, Route, Link} from "react-router-dom";

import './App.css';
import {InputForm} from "./InputForm";
import {PolicyPage} from "./policy";

export const routesPaths = {
    about: 'about'
}

function App() {
  const handleShowAlert = () => {
    alert("Hello React! Hello world! Nice to meet you!")
  }
  return (
    <div className="App">
        <div className="App">
            <div className='App-header'>
                <div>
                    Witaj!
                </div>
                <div>
                    <Link className='App-link' to={'/'}>Kim jesteś?</Link>
                    <Link className='App-link' to={`/${routesPaths.about}`}>O co tu chodzi?</Link>
                    <Link className='App-link' to={'/form'}>Kim jestem?</Link>
                    <Link className='App-link' to={'/policy'}>Polityka</Link>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<InputForm defaultValue={'hello form'}/>}/>
                <Route path='*' element={<div>404</div>}/>
                <Route path={`/${routesPaths.about}`} element={<div>Pierwsze, cenne doświadczenia z React. Dzięki, Maćku!</div>}/>
                <Route path='/policy' element={<PolicyPage/>}/>
                <Route path='/form' element={<div>Aspiruję do bycia programistką :D</div>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
