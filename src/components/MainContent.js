import React from 'react';
// import BackgroundImage from './img/bg.jpg';

const MainContent = () => {

   
    return (
        <div className="art-content">
            <div className="art-curtain"></div>
            <div className="art-top-bg" style={{ background: `url(${process.env.PUBLIC_URL}/assets/img/bg.jpg)` }}>
            
                <div className="art-top-bg-overlay"></div>
            
            </div>

            <div className="transition-fade" id="swup">
                <div id="scrollbar" className="art-scroll-frame">
                    <div className="container-fluid">
                        <div className="row p-60-0 p-lg-30-0 p-md-15-0">
                            <div className="col-lg-12">
                                <div className="art-a art-banner" style={{ background: `url(${process.env.PUBLIC_URL}/assets/img/bg.jpg)` }}>
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
                                        <img src={process.env.PUBLIC_URL+"/assets/img/face-2.png"} className="art-banner-photo" alt="Your Name"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row p-30-0">
                            <div className="col-md-3 col-6">
                                <div className="art-counter-frame">
                                    <div className="art-counter-box">
                                        <span className="art-counter">10</span><span className="art-counter-plus">+</span>
                                    </div>
                                    <h6>Years Experience</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="art-counter-frame">
                                    <div className="art-counter-box">
                                        <span className="art-counter">143</span>
                                    </div>
                                    <h6>Completed Projects</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="art-counter-frame">
                                    <div className="art-counter-box">
                                        <span className="art-counter">114</span>
                                    </div>
                                    <h6>Happy Customers</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="art-counter-frame">
                                    <div className="art-counter-box">
                                        <span className="art-counter">20</span><span className="art-counter-plus">+</span>
                                    </div>
                                    <h6>Honors and Awards</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="art-section-title">
                                    <div className="art-title-frame">
                                        <h4>My Services</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="art-a art-service-icon-box">
                                    <div className="art-service-ib-content">
                                        <h5 className="mb-15">Web Development</h5>
                                        <div className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</div>
                                        <div className="art-buttons-frame"><a href="#." className="art-link art-color-link art-w-chevron">Order now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="art-a art-service-icon-box">
                                    <div className="art-service-ib-content">
                                        <h5 className="mb-15">UI/UX Design</h5>
                                        <div className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</div>
                                        <div className="art-buttons-frame"><a href="#." className="art-link art-color-link art-w-chevron">Order now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="art-a art-service-icon-box">
                                    <div className="art-service-ib-content">
                                        <h5 className="mb-15">Sound Design</h5>
                                        <div className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</div>
                                        <div className="art-buttons-frame"><a href="#." className="art-link art-color-link art-w-chevron">Order now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="art-a art-service-icon-box">
                                    <div className="art-service-ib-content">
                                        <h5 className="mb-15">Game Design</h5>
                                        <div className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</div>
                                        <div className="art-buttons-frame"><a href="#." className="art-link art-color-link art-w-chevron">Order now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="art-a art-service-icon-box">
                                    <div className="art-service-ib-content">
                                        <h5 className="mb-15">Advertising</h5>
                                        <div className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</div>
                                        <div className="art-buttons-frame"><a href="#." className="art-link art-color-link art-w-chevron">Order now</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MainContent;