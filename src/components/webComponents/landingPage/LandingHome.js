import React from 'react';
import NayaNavbar from './NayaNavbar';
import FirstLayout from './FirstLayout';
import SecondLayout from './SecondLayout';
import StartListening from './StartListening';
import PageFooter from './PageFooter';

function LandingHome() {
    return (
        <div>
            <NayaNavbar />
            <FirstLayout />
            <SecondLayout />
            <StartListening />
            <PageFooter />
        </div>
    )
}

export default LandingHome;
