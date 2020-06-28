import React from 'react';
import Languages from './SidebarLanguages';
import TechnicalSkills from './SidebarSkills';
import ExtraSkills from './ExtraSkills';
import PersonalInfo from './PersonalInfo';
import SocialLinks from './SocialLinks';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {
    return (
        <div className="art-info-bar">
            <div className="art-info-bar-frame">
           
                <div className="art-info-bar-header">
               
                    <a className="art-info-bar-btn" href="/assets">
                        <i className="fas fa-ellipsis-v"></i>
                    </a>
                </div>

                   
                <SidebarHeader />

                
                <div id="scrollbar2" className="art-scroll-frame">

                    <PersonalInfo />

                    <div className="art-ls-divider"></div>

                    <Languages />

                    <div className="art-ls-divider"></div>

                    <TechnicalSkills />

                    <div className="art-ls-divider"></div>

                    <ExtraSkills />

                    <div className="art-ls-divider"></div>

                    <div className="art-links-frame p-15-15">
                        <a href="files/cv.txt" className="art-link" download>Download cv <i className="fas fa-download"></i></a>
                    </div>


                </div>

                <SocialLinks />
                
                
            </div>
                
        </div>
    )
}

export default Sidebar;