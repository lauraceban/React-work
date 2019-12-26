import React from 'react';
import "../Header.css/Audio.css";
import audioFile from "./Audio/waltz.mp3"

class Audio extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <audio controls autoPlay>
                        <source id="Soundtrack" src={audioFile} />
                    </audio>
                </div>
            </div>
        );
    }
}

export default Audio;
