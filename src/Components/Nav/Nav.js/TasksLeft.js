import React from 'react';
import "../Nav.css/TasksLeft.css";

class TasksLeft extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="col-12">
                        <p className="TasksLeft">Tasks left: </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TasksLeft;

