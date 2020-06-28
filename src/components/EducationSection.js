import React, { Component } from 'react'
import EducationItem from './EducationItem';

export default class EducationSection extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="art-section-title">
                    <div className="art-title-frame">
                        <h4>Education</h4>
                    </div>
                </div>
                <div className="art-timeline art-gallery" id="history">

                    <EducationItem />
                    <EducationItem />
                    <EducationItem />
                    <EducationItem />
                    
                </div>
            </div>
        )
    }
}
