import React from 'react';
import "../Nav.css/AddTask.css";


class AddTask extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="col-12">
                        <span><input id="AddTaskInput" type="text" placeholder="I need to..."></input></span>
                        <span><button id="AddTaskButton">Add a task</button></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;

