//Import React
import React from 'react';

//Import Styles
import './Load.css';

//Import Components
import Presentation from '../presentation/Presentation';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

//Export Component
export default function Load() {
    //On animation ends, load de app
    const showApp = () => {
        document.getElementsByClassName('appDiv')[0].style.display = "block";
    }

    return (
        <div>
            <div class="loader-wrapper" onAnimationEnd={() => showApp()}>
                <span class="loader"><span class="loader-inner"></span></span>
            </div>
            <div className="appDiv">
                <Presentation />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}
