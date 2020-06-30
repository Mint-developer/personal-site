import React, {Component} from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Preloader from '../components/Preloader';
import MenuBar from '../components/MenuBar';



class Home extends Component {


    // componentDidMount(){
    //     //An array of assets
    //     let scripts = [
    //         { src: "assets/js/plugins/anime.min.js" },
    //         { src: "assets/js/plugins/swiper.min.js" },
    //         { src: "assets/js/plugins/progressbar.min.js" },
    //         { src: "assets/js/plugins/smooth-scrollbar.min.js" },
    //         { src: "assets/js/plugins/overscroll.min.js" },
    //         { src: "assets/js/plugins/typing.min.js" },
    //         { src: "assets/js/plugins/isotope.min.js" },
    //         { src: "assets/js/plugins/fancybox.min.js" },
    //         { src: "assets/js/plugins/swup.min.js" },
    //         { src: "assets/js/main.js" },
    //     ]
    //     //Append the script element on each iteration
    //     scripts.map(item => { 
    //         const script = document.createElement("script")
    //         script.src = item.src
    //         script.async = true
    //         document.body.appendChild(script)
    //     })    
    //  }

    render(){
        return (
            <div>
                <div className="art-app">
                    <div className="art-mobile-top-bar"></div>

                    <div className="art-app-wrapper">
                        <div className="art-app-container">
                            <Sidebar />
                            <MainContent />

                            <MenuBar />

                        </div>
                        
                    </div>
    
                    <Preloader />
                </div>
                <div id="swupMenu"></div>
            </div>
        );
    }
	
}

export default Home;
