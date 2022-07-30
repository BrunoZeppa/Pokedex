import React, { useState } from 'react';

const Settings = () => {

    const [isDark, setIsDark] = useState(false);

    const changeDark = () => {
        setIsDark(!isDark);
    }

    document.body.style = `background: ${isDark ? 'rgb(29, 27, 27)' : 'white'} `;


    return (
        <div className='settings'>
            <aside>
                <h2>Change Theme</h2>
                <div className="check-container center first">
                    <span>Light</span>
                    <input
                        type="checkbox"
                        defaultChecked={isDark}
                        onChange={() => changeDark()} />
                    <span>Dark</span>
                </div>
            </aside>
        </div>
    );
};

export default Settings;