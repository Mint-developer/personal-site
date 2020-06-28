import React from 'react';
import face1 from '../assets/img/face-1.jpg';

export default function SidebarHeader() {
    return (
        <div className="art-header">
                
            <div className="art-avatar">
                <a data-fancybox="avatar" href="assets/img/face-1.jpg" className="art-avatar-curtain">
                    <img src={face1} alt="avatar" />
                    <i className="fas fa-expand"></i>
                </a>
                
                <div className="art-lamp-light">
                    <div className="art-available-lamp"></div>
                </div>
            </div>
            
            <h5 className="art-name mb-10">Muhammad Ijlal Nasir</h5>
            
            <div className="art-sm-text">Full-Stack Web Deweloper <br />Ui/UX Designer, </div>
        </div>
    )
}
