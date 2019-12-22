import React from 'react';
import "../Nav.css/Changes.css";

class Changes extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <label id="Changes"> Have you made any changes?</label>
                </div>
                <div class="col-12">
                    <button id="ChangesButton">Update List</button>
                </div>
            </div >
        );
    }
}

export default Changes;

