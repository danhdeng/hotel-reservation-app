import React from 'react';

import Template from '../components/Template';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from "../components/RoomsContainer";
export const Rooms = () => {
    return(
    <>
    <Template cssStyle="roomsHero">
        <Banner title="Our Rooms">
            <Link to="/" className="btn-primary">return home</Link>
        </Banner> 
    </Template>
    <RoomsContainer />
    </>
)
}
