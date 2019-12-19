import React from 'react';
import RemainingTitle from './RemainingTitle.css';

class RemainingTitle extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className = "row">
                        <div className="col-12">
                            <h3><span className="RemainingTitle">Remaining Tasks</span></h3> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RemainingTitle;

