import React from 'react'
import LanguageItem from './SidebarLanguageItem';

export default function SidebarLanguages() {
    return (
        <div className="art-lang-skills p-30-15" style={{justifyContent: 'start'}}>
            
            <LanguageItem id="circleprog1" language="English"/>
            <LanguageItem id="circleprog2" language="Urdu"/>
            {/* <LanguageItem id="circleprog3" /> */}

            
        </div>
    )
}
