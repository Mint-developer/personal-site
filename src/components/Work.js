import React, { Component } from 'react';
import Project from './Project';
import jinnImg from '../assets/img/projects/jinn.png';
import jinnBO from '../assets/img/projects/jinn-bo.png';
import bri from '../assets/img/projects/bri.jpg';
import gm from '../assets/img/projects/gulberg.png';
import bajwa from '../assets/img/projects/bajwa.png';


export default class Work extends Component {
    render() {
        return (
            <div className="container-fluid">                       
                <div className="row p-30-0">
                    <div className="col-lg-12">
                        
                        <div className="art-section-title">
                        
                            <div className="art-title-frame">
                                <h4>Works</h4>
                            </div>
                        
                        
                            <div className="art-right-frame">
                                
                                <div className="art-filter">
                                
                                    <a href="#" data-filter="*" className="art-link art-current">All Categories</a>
                                    
                                    <a href="#" data-filter=".website" className="art-link">Websites</a>
                                    
                                    <a href="#" data-filter=".webapp" className="art-link">Web Apps</a>
                                    
                                    {/* <a href="#" data-filter=".drawings" className="art-link"></a> */}
                                    
                                    {/* <a href="#" data-filter=".ui" className="art-link">UI Elements</a> */}
                                </div>
                                
                            </div>
                        
                        </div>
            
                    </div>

                    <div className="art-grid art-grid-3-col art-gallery">
                        <Project filter="website" title="Jinnbaba Services Website" img={jinnImg} url="https://jinnbaba.com.pk"/>
                        <Project filter="webapp" title="Jinnbaba Back Office - Order Management System" img={jinnBO}/>
                        <Project filter="website" title="Blue Reef Investments Website" img={bri} url="http://www.brinvestments.co.uk/"/>
                        <Project filter="website" title="Gulberg Marketing Website" img={gm} url="http://www.gulbergmarketing.com/"/>
                        <Project filter="website" title="Bajwa Law Firm Website" img={bajwa} url="http://www.bajwaip.com/"/>
                    </div>

                    
                </div>
            </div>
        )
    }
}


