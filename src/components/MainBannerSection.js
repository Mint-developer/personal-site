import React from 'react';
import bgImg from '../assets/img/bg.jpg';
import face2 from '../assets/img/face-2.png';

export default function MainBannerSection() {
    return (
        <div className="container-fluid">
            <div className="row p-60-0 p-lg-30-0 p-md-15-0">
                <div className="col-lg-12">
                    <div className="art-a art-banner" style={{ background:  `url(${bgImg})` }}>
                        <div className="art-banner-back"></div>
                        <div className="art-banner-dec"></div>
                        <div className="art-banner-overlay">
                            <div className="art-banner-title">
                                <h1 className="mb-15">Discover my Amazing <br />Art Space!</h1>
                                <div className="art-lg-text art-code mb-25">&lt;<i>code</i>&gt; I build <span className="txt-rotate" data-period="2000" data-rotate='[ "database backed web applications.", "blazing fast SEO friendly websites.", "automation tools." ]'></span>&lt;/<i>code</i>&gt;</div>
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
    )
}
