import React from 'react';
// import BackgroundImage from './img/bg.jpg';

import bgImg from '../assets/img/bg.jpg';
import face2 from '../assets/img/face-2.png';
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
                    <div className="container-fluid">
                        <div className="row p-60-0 p-lg-30-0 p-md-15-0">
                            <div className="col-lg-12">
                                <div className="art-a art-banner" style={{ background:  `url(${bgImg})` }}>
                                    <div className="art-banner-back"></div>
                                    <div className="art-banner-dec"></div>
                                    <div className="art-banner-overlay">
                                        <div className="art-banner-title">
                                            <h1 className="mb-15">Discover my Amazing <br />Art Space!</h1>
                                            <div className="art-lg-text art-code mb-25">&lt;<i>code</i>&gt; I build <span className="txt-rotate" data-period="2000" data-rotate='[ "web interfaces.", "ios and android applications.", "design mocups.", "automation tools." ]'></span>&lt;/<i>code</i>&gt;</div>
                                            <div className="art-buttons-frame">
                            
                                                <a href="#." className="art-btn art-btn-md"><span>Explore now</span></a>
                                                
                                                <a href="#." className="art-link art-white-link art-w-chevron">Hire me</a>
                                            </div>
                                        </div>
                                        <img src={face2} className="art-banner-photo" alt="Your Name"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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