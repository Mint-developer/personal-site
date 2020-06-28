import React from 'react'

export default function SidebarSkillsItem(props) {
    return (
        <div className="art-hard-skills-item">
            <div className="art-skill-heading">
                <h6>{props.title}</h6>
            </div>
            <div className="art-line-progress">
                <div id={props.id}></div>
            </div>
        </div>
    )
}
