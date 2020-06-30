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

                    <EducationItem title="Pearson BTEC HND Computing" institute="The Millennium Universal College" from="Jan 2018" to="Dec 2019"/>
                    <EducationItem title="HSSC Pre-Engineering" institute="Edwardes College" from="March 2015" to="Aug 2017"/>
                    <EducationItem title="SSC Science" institute="Army Public School" from="" to="2015"/>
                    
                </div>
            </div>
        )
    }
}
