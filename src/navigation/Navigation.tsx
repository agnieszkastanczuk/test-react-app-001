import {Link} from "react-router-dom";
import React, {useState} from "react";

import {routesPaths} from "../routes";


import './styles.css';

export const Navigation = () => {
    const [navigationVisible, setNavigationVisible] = useState<boolean>(true)
    const handleShowMobileNav = () => {
        setNavigationVisible(!navigationVisible)
    }

    return (
        <div className='Navigation'>
            <div>
                Witaj!
            </div>
            <div>
                <Link className='App-link' to={'/'}>Kim jesteś?</Link>
                <Link className='App-link' to={`/${routesPaths.about}`}>O co tu chodzi?</Link>
                <Link className='App-link' to={'/form'}>Kim jestem?</Link>
                <Link className='App-link' to={'/policy'}>Polityka</Link>
                <Link className='App-link' to={'/Rick'}>Rick</Link>
            </div>
        </div>
    )
}