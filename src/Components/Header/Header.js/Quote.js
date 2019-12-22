import React from 'react';
import "../Header.css/Quote.css";

class Quote extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="col-12">
                        <span id="Quotation"> “He who is best prepared can best serve his moment of inspiration.”</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quote;