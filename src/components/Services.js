import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
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
                                <div className="mb-15">Mobile responsive, Blazing fast, SEO friendly, Analytics ready corporate looking websites tailored to your needs using cutting edge technologies.</div>
                                {/* <div className="art-buttons-frame"><a href="#." className="art-link art-color-link art-w-chevron">Order now</a></div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                            <div className="art-service-ib-content">
                                <h5 className="mb-15">Database Backed Web Applications</h5>
                                <div className="mb-15">Database backed web apps ranging from CRM to School Management Systems custom tailored to meet your business objectives.</div>
                                {/* <div className="art-buttons-frame"><a href="#." className="art-link art-color-link art-w-chevron">Order now</a></div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                            <div className="art-service-ib-content">
                                <h5 className="mb-15">Content Management System</h5>
                                <div className="mb-15">Data driven websites backed by a customized CMS to give you a full control over your website with 0% programming knowledge.</div>
                                {/* <div className="art-buttons-frame"><a href="#." className="art-link art-color-link art-w-chevron">Order now</a></div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                            <div className="art-service-ib-content">
                                <h5 className="mb-15">Game Design</h5>
                                <div className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</div>
                                <div className="art-buttons-frame"><a href="#." className="art-link art-color-link art-w-chevron">Order now</a></div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                            <div className="art-service-ib-content">
                                <h5 className="mb-15">Advertising</h5>
                                <div className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</div>
                                <div className="art-buttons-frame"><a href="#." className="art-link art-color-link art-w-chevron">Order now</a></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
