import React from 'react';
import Quote from './Quote.css';

class Quote extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="col-12">
                        <span id="Quote"> “He who is best prepared can best serve his moment of inspiration.”</span>
                        <br>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quote;