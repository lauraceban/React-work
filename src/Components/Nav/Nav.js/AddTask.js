import React from 'react';
import AddTask from '../Nav.css/AddTask.css';


class AddTask extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="col-12">
                        <input id="AddTaskInput" type="text" placeholder="I need to..."></input>
                        <button id="AddTaskButton">Add a task</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;