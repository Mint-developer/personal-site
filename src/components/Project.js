import React, { Component } from 'react';
// import work1 from '../assets/img/works/thumbnail/1.jpg';

export default class Project extends Component {
    
    render() {

        const title = this.props.title;
        const filter = this.props.filter;
        const img = this.props.img;
        const url = this.props.url;

        return (
            
            <div className={`art-grid-item ${filter}`}>
                <a data-fancybox="gallery" href={img} className="art-a art-portfolio-item-frame art-horizontal">
                    <img src={img} alt="item" />
                    <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                </a>
                <div className="art-item-description">
                    <h5 className="mb-15">{title}</h5>
                    {url ? <a href={url} target="_blank" className="art-link art-color-link art-w-chevron">Visit Site</a> : ''}
                    
                </div>
            </div>
            
        )
    }
}
