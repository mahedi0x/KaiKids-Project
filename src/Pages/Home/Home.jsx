import Lottie from 'lottie-react';
import React from 'react';

// import kidsAnimation from "../../assets/animations/kidsAnimation.json"
import Banner from '../../Components/Banner/Banner';
import MeetKail from '../../Components/MeetKail/MeetKail';
import CoreExperience from '../../Components/CoreExperience/CoreExperience';
import ThreeWorlds from '../../Components/ThreeWorlds/ThreeWorlds';
import ImpactSection from '../../Components/ImpactSection/ImpactSection';

const Home = () => {
    return (
        <div>

            {/* <Lottie animationData={kidsAnimation} loop={true} className='w-1/2'/> */}
            <Banner></Banner>
            <MeetKail></MeetKail>
            <CoreExperience></CoreExperience>
            <ThreeWorlds></ThreeWorlds>
            <ImpactSection></ImpactSection>
            

        </div>
    );
};

export default Home;