import React from 'react'

export default function ExperienceItem({title, org, date}) {
    return (
        <div className="art-timeline-item">
            <div className="art-timeline-mark-light"></div>
            <div className="art-timeline-mark"></div>
            <div className="art-a art-timeline-content">
                <div className="art-card-header">
                    <div className="art-left-side">
                        <h5>{title}</h5>
                        <div className="art-el-suptitle mb-15">{org}</div>
                    </div>
                    <div className="art-right-side">
                        <span className="art-date">{date}</span>
                    </div>
                </div>
                {/* <p>Placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p> */}
            </div>
        </div>
    )
}
