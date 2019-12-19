import React from 'react';
import './RemainingTasks.css';
import './TaskItem.css';

class RemainingTasks extends React.Component {
    
    render() {
      return (
        <div className="row">
            <div className="col-12 col-sm-6">
                <span className = "taskIs"> Do the <a href="https://www.youtube.com/watch?v=6SlwnNKsidw"> Christmas</a> shopping </span>;
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
                <span className = "taskIs"> Attend medical appointment </span>;
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
                <span className = "taskIs"> Apply for travelling Visa </span>;
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
                <span className = "taskIs"> Attend the <a href="https://www.youtube.com/watch?v=K2snTkaD64Uw">opera</a> performance on Thursday</span>;
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
                <span className = "taskIs">Choose activities for each honeymoon <a href="https://www.nomadicmatt.com/travel-guides/indonesia-travel-tips/bali/">destination</a></span>;
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
                <span className = "taskIs"> Submit honeymoon requests to travel concierge </span>;
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

export default RemainingTasks;
