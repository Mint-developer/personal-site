import React, { Component } from 'react'

export default class Stats extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row p-30-0">
                    <div className="col-md-3 col-6">
                        <div className="art-counter-frame">
                            <div className="art-counter-box">
                                <span className="art-counter">2</span><span className="art-counter-plus">+</span>
                            </div>
                            <h6>Years Experience</h6>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="art-counter-frame">
                            <div className="art-counter-box">
                                <span className="art-counter">43</span>
                            </div>
                            <h6>Completed Projects</h6>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="art-counter-frame">
                            <div className="art-counter-box">
                                <span className="art-counter">14</span>
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
        )
    }
}
