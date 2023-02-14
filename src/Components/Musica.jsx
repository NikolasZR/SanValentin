//reproductor de musica con react-player

import React from 'react';
import ReactPlayer from 'react-player';
import './musica.css'

const Musica = () => {
    return (
        <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=n00T32BXqpU' />
        </div>
    );
}

export default Musica;
