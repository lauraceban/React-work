import React from 'react';
import '../Nav.css/TaskItem.css';

class TaskItemRemaining extends React.Component {
    
    render() {
      return (
        <div className="row">
            <div className="col-12 col-sm-6">
                <span className = "TaskItem"> Do the <a href="https://www.youtube.com/watch?v=6SlwnNKsidw"> Christmas</a> shopping </span>;
                <br/>
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
                <span className = "TaskItem"> Attend medical appointment </span>;
                <br/>
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
                <span className = "TaskItem"> Apply for travelling Visa </span>;
                <br/>
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
                <span className = "TaskItem"> Attend the <a href="https://www.youtube.com/watch?v=K2snTkaD64Uw">opera</a> performance on Thursday</span>;
                <br/>
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
                <span className = "TaskItem">Choose activities for each honeymoon <a href="https://www.nomadicmatt.com/travel-guides/indonesia-travel-tips/bali/">destination</a></span>;
                <br/>
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
                <span className = "TaskItem"> Submit honeymoon requests to travel concierge </span>;
                <br/>
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

export default TaskItemRemaining;
