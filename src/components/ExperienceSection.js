import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem';

export default class ExperienceSection extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="art-section-title">
                    <div className="art-title-frame">
                        <h4>Work History</h4>
                    </div>
                </div>

                <div className="art-timeline">
                    <ExperienceItem />
                    <ExperienceItem />
                    <ExperienceItem />
                </div>
            </div>
                    
        )
    }
}
