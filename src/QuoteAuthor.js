import React from 'react';
import QuoteAuthor from './QuoteAuthor.css';

class QuoteAuthor extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="col-12">
                        <span id="QuoteAuthor">Samuel Taylor Coleridge</span>
                        <br>
                        <br>
                        <img src="./images/19.jpg" style="width:200px;">
                        <br>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuoteAuthor;