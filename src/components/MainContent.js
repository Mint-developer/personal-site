import React from 'react';
import bgImg from '../assets/img/bg.jpg';
import MainBanner from '../components/MainBannerSection';
import Services from './Services';
import Stats from './Stats';
import Work from './Work';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';

const MainContent = () => {

   
    return (
        <div className="art-content">
            <div className="art-curtain"></div>
            <div className="art-top-bg" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="art-top-bg-overlay"></div>
            
            </div>

            <div className="transition-fade" id="swup">
                <div id="scrollbar" className="art-scroll-frame">
                    
                    <MainBanner />

                    <Stats />

                    <Services />

                    <Work />

                    <div className="container-fluid">
                        <div className="row">
                            <EducationSection />
                            <ExperienceSection />
                        </div>
                    </div>

                    

                </div>
            </div>

        </div>
    )
}

export default MainContent;