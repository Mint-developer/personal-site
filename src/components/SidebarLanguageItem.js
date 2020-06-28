import React from 'react'

export default function SidebarLanguageItem(props) {
    return (
        <div className="art-lang-skills-item">
            <div id={props.id} className="art-cirkle-progress"></div>
            <h6>{props.language}</h6>
        </div>
    )
}
