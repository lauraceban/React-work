import React from 'react';
import "../Nav.css/TaskItem.css";

class TaskItemRemaining extends React.Component {

    render() {
        return (
            <div>

                <div className="row">

                    <div className="col-12 col-sm-6">
                        <span className="TaskItem"> {this.props.name} </span>
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
                        <span className="TaskItem">  {this.props.name} </span>
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
                        <span className="TaskItem">  {this.props.name} </span>
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
                        <span className="TaskItem">  {this.props.name}</span>
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
                        <span className="TaskItem"> {this.props.name}</span>
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
                        <span className="TaskItem">  {this.props.name} </span>
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

export default TaskItemRemaining;
