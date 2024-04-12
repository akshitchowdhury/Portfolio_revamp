import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPlay, faForward } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

import './PlayKeys.css'
const PlayKeys = () => {
    const links = ["/", "/about", "/projects", "/services", "/contact"];
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        const nextIndex = (index + 1) % links.length;
        setIndex(nextIndex);
    };

    const handlePrev= ()=>{
        const prevIndex = (index-1)% links.length;
        setIndex(prevIndex)
    }

    return (
        <div>
        
            <div className="playButton flex items-center justify-center space-x-8 mt-4 md:mt-0 dark:border-gray-700">
                <Link to={links[(index - 1 + links.length) % links.length]}>
                <button onClick={handlePrev}>
                    <FontAwesomeIcon icon={faBackward} size="lg" className="player" style={{ cursor: 'pointer' }}/>
                    </button>
                </Link>

                <Link to="/">
                    <FontAwesomeIcon icon={faCirclePlay} size="lg" className="player" style={{  cursor: 'pointer' }}/>
                </Link>
                <Link to={links[(index + 1) % links.length]}>
                <button onClick={handleNext}>
                    <FontAwesomeIcon icon={faForward} size="lg" className="player" style={{  cursor: 'pointer' }}/>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PlayKeys;
