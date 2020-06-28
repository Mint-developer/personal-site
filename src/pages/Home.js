import React, {Component} from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';



class Home extends Component {


    componentDidMount(){
        //An array of assets
        let scripts = [
            { src: "assets/js/plugins/anime.min.js" },
            { src: "assets/js/plugins/swiper.min.js" },
            { src: "assets/js/plugins/progressbar.min.js" },
            { src: "assets/js/plugins/smooth-scrollbar.min.js" },
            { src: "assets/js/plugins/overscroll.min.js" },
            { src: "assets/js/plugins/typing.min.js" },
            { src: "assets/js/plugins/isotope.min.js" },
            { src: "assets/js/plugins/fancybox.min.js" },
            { src: "assets/js/plugins/swup.min.js" },
            { src: "assets/js/main.js" },
        ]
        //Append the script element on each iteration
        scripts.map(item => { 
            const script = document.createElement("script")
            script.src = item.src
            script.async = true
            document.body.appendChild(script)
        })    
     }

    render(){
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
	
}

export default Home;
