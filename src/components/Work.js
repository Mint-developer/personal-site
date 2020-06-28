import React, { Component } from 'react';
import Project from './Project';


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
                                    
                                    <a href="#" data-filter=".webTemplates" className="art-link">Web Templates</a>
                                    
                                    <a href="#" data-filter=".logos" className="art-link">Logos</a>
                                    
                                    <a href="#" data-filter=".drawings" className="art-link">Drawings</a>
                                    
                                    <a href="#" data-filter=".ui" className="art-link">UI Elements</a>
                                </div>
                                
                            </div>
                        
                        </div>
            
                    </div>

                    <div className="art-grid art-grid-3-col art-gallery">
                        <Project filter="webTemplates"/>
                        <Project filter="logos"/>
                    </div>

                    
                </div>
            </div>
        )
    }
}


