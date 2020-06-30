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
                    {/* <ExperienceItem title="Full-Stack Web Developer" org="Jinnbaba Services" date="" /> */}
                    <ExperienceItem title="Full-Stack Web Developer - Lead" org="Flair Travel and Holidays" date="Jan 2020 - Present"/>
                    
                    <ExperienceItem title="Full-Stack Web Developer" org="Red Star Technologies" date="July 2018 - May 2019"/>

                    <ExperienceItem title="Web Developer - Jr." org="Red Star Technologies" date="March 2018 - July 2018"/>
                    
                </div>
            </div>
                    
        )
    }
}
