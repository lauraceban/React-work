import React from 'react';
import './CompletedTasks.css';
import './TaskItem.css';

class CompletedTasks extends React.Component {
    
    render() {
      return (
        <div className="row">
            <div className="col-12 col-sm-6">
                <span className = "taskIs"> <a href="https://www.youtube.com/watch?v=j3pdNPYRvwk">Study </a></span>;
                <br>
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
                <span className = "taskIs"> Complete homework </span>;
                <br>
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
                <span className = "taskIs"> Submit homework </span>;
                <br>
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
    }
}

export default CompletedTasks;
