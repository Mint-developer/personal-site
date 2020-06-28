import React from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';


function Home() {
	return (
        <div>
            <div className="art-app art-app-onepage">
            
                <div className="art-mobile-top-bar"></div>

                <div className="art-app-wrapper">

                    <div className="art-app-container">
                        <Sidebar />
                        <MainContent />
                    </div>

                </div>

                <div className="art-preloader">
                   
                    <div className="art-preloader-content">
                        
                        <h4>Muhammad Ijlal Nasir</h4>
                       
                        <div id="preloader" className="art-preloader-load"></div>
                    </div>
                   
                </div>
            </div>
            <div id="swupMenu"></div>
        </div>

        
        
	);
}

export default Home;
