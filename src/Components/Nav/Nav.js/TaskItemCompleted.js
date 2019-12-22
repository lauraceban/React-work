import React from 'react';
import "../Nav.css/TaskItem.css";

class TaskItemCompleted extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <span className="TaskItem"> <a href="https://www.youtube.com/watch?v=j3pdNPYRvwk">Study </a></span>
                        
                    </div>
                    <div className="col-4 col-sm-2">
                        <span><button className="DoneButton">&#x2713;</button></span>
                    </div>
                    <div class="col-4 col-sm-2">
                        <span><button className="Reminder">Set reminder</button></span>
                    </div>
                    <div className="col-4 col-sm-2">
                        <span><button className="DeleteButton">Delete</button></span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-6">
                        <span className="TaskItem"> Complete homework </span>
                        
                    </div>
                    <div className="col-4 col-sm-2">
                        <span><button className="DoneButton">&#x2713;</button></span>
                    </div>
                    <div class="col-4 col-sm-2">
                        <span><button className="Reminder">Set reminder</button></span>
                    </div>
                    <div className="col-4 col-sm-2">
                        <span><button className="DeleteButton">Delete</button></span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-6">
                        <span className="TaskItem"> Submit homework </span>
                        
                    </div>
                    <div className="col-4 col-sm-2">
                        <span><button className="DoneButton">&#x2713;</button></span>
                    </div>
                    <div class="col-4 col-sm-2">
                        <span><button className="Reminder">Set reminder</button></span>
                    </div>
                    <div className="col-4 col-sm-2">
                        <span><button className="DeleteButton">Delete</button></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskItemCompleted;
