import React from 'react';
import Template from '../components/Template';
import Banner from "../components/Banner";
import { Link } from 'react-router-dom';

export const Error = () => {
    return <Template>
            <Banner title="404" subtitle="page not found">
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Template>
}
