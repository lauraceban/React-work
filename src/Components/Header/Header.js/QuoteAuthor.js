import React from 'react';
import "../Header.css/QuoteAuthor.css";
import "../Header.css/QuoteAuthorImage.css";

class QuoteAuthor extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="col-12">
                        <div id="QuoteAuthor">Samuel Taylor Coleridge</div>
                        <img id = "BlueFlowersImage" src="./Images/Blue.jpg"  alt="Blue Flowers" /> 
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuoteAuthor;
