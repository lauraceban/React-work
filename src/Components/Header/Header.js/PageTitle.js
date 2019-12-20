import React from 'react';
import '../Header.css/PageTitle.css';

class PageTitle extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <p id="PageTitle">My "To Do" Application</p>
                </div>
            </div>
        );
    }
}

export default PageTitle;

