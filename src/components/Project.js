import React, { Component } from 'react';
import work1 from '../assets/img/works/thumbnail/1.jpg';

export default class Project extends Component {
    
    render() {
        return (
            
            <div className={`art-grid-item ${this.props.filter}`}>
                <a data-fancybox="gallery" href={work1} className="art-a art-portfolio-item-frame art-horizontal">
                    <img src={work1} alt="item" />
                    <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                </a>
                <div className="art-item-description">
                    <h5 className="mb-15">Project title</h5>
                    <a href="#." className="art-link art-color-link art-w-chevron">Read more</a>
                </div>
            </div>
            
        )
    }
}
