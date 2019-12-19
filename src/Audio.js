import React from 'react';

class Audio extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <audio controls autoplay>
                        <source src="./audio/waltz.mp3" />
                    </audio>
                </div>
            </div>
        );
    }
}

export default Audio;