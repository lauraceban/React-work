import React from 'react';
import CompletedTitle from '../Nav.css/CompletedTitle.css';

class CompletedTitle extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className = "row">
                        <div className="col-12">
                            <h3><span className="CompletedTitle">Already Completed</span></h3> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompletedTitle;