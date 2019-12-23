import React from 'react';
import "../Header.css/Audio.css";

class Audio extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <audio controls autoplay>
                        <source id="Soundtrack" src="./Audio/waltz.mp3"  />
                    </audio>
                </div>
            </div>
        );
    }
}

export default Audio;
