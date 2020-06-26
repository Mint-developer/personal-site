import React from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';


function App() {
	return (
        <div className="App">
            <div className="art-app art-app-onepage">
            
                <div className="art-mobile-top-bar"></div>

                <div className="art-app-wrapper">

                    <div className="art-app-container">
                        <Sidebar />
                        <MainContent />
                    </div>

                </div>
            </div>
            <div id="swupMenu"></div>
        </div>

        
        
	);
}

export default App;
