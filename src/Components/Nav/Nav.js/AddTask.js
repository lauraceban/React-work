import React from 'react';
import "../Nav.css/AddTask.css";


class AddTask extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="col-12">
                        <span>
                            <input
                                id="AddTaskInput"
                                type="text"
                                placeholder="I need to..."
                                value={this.props.taskText}
                                onChange={(event) => this.props.onTextEnter(event.target.value)}
                            />
                        </span>

                        <span>
                            <button id="AddTaskButton" onClick={this.props.onAdd}>Add a task</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;

