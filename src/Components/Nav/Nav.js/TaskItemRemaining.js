import React from 'react';
import "../Nav.css/TaskItem.css";

class TaskItemRemaining extends React.Component {

    render() {
        return (
            <div>

                <div className="row">

                    <div className="col-12 col-sm-8">
                        <span className="TaskItem"> {this.props.name} </span>
                    </div>

                    <div className="col-6 col-sm-2">
                        <span><button className="EmptyButton" onClick={this.props.onComplete}></button></span>
                    </div>

                    <div className="col-6 col-sm-2">
                        <span><button disabled className="FadedDeleteButton">Delete</button></span>
                    </div>
                </div>


            </div>
        )
    }
}

export default TaskItemRemaining;
