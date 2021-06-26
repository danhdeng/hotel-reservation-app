import React from 'react'
import Template from "../components/Template";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeatureRooms from '../components/FeatureRooms';

export const Home = () => {
    return (
    <>
    <Template>
        <Banner title="Luxurous rooms" subtitle="delux rooms starting at $299">
            <Link to="/rooms" className="btn-primary">Our Rooms</Link>
        </Banner>
    </Template>
    <Services /> 
    <FeatureRooms />
    </>
    );
}
