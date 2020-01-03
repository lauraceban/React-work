import React from 'react';
import "../Nav.css/TaskItem.css";

class TaskItemCompleted extends React.Component {

    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-12 col-sm-8">
                        <span className="TaskItem"> {this.props.name} </span>
                    </div>
                    <div className="col-12 col-sm-2">
                        <span><button className="DeleteButton" onClick={this.props.onDelete}>Delete</button></span>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default TaskItemCompleted;
