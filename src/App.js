import React from 'react';
import './App.css';

import Audio from './Components/Header/Header.js/Audio';
import PageTitle from './Components/Header/Header.js/PageTitle';
import Quote from './Components/Header/Header.js/Quote';
import QuoteAuthor from './Components/Header/Header.js/QuoteAuthor';

import TasksLeft from './Components/Nav/Nav.js/TasksLeft';
import AddTask from './Components/Nav/Nav.js/AddTask';

import RemainingTitle from './Components/Nav/Nav.js/RemainingTitle';
import TaskItemRemaining from './Components/Nav/Nav.js/TaskItemRemaining';

import CompletedTitle from './Components/Nav/Nav.js/CompletedTitle';
import TaskItemCompleted from './Components/Nav/Nav.js/TaskItemCompleted';

import Changes from './Components/Nav/Nav.js/Changes';


class App extends React.Component {
  state = {

    remainingTasks : [
      {name: "Do the <a href='https://www.youtube.com/watch?v=6SlwnNKsidw'> Christmas</a> shopping", completed: false, date: "20-12-2019"},
      {name: "Attend medical appointment", completed: false, date: "20-12-2019"}, 
      {name: "Apply for travelling Visa", completed: false, date: "20-12-2019"}, 
      {name: "Attend the <a href='https://www.youtube.com/watch?v=K2snTkaD64Uw'>opera</a> performance", completed: false, date: "20-12-2019"},
      {name: "Choose activities for each honeymoon <a href='https://www.nomadicmatt.com/travel-guides/indonesia-travel-tips/bali/'>destination", completed: false, date: "20-12-2019"},
      {name: "Submit honeymoon requests to travel concierge", completed: false, date: "20-12-2019"},
      ],
    
    completedTasks: [
      {name: "<a href='https://www.youtube.com/watch?v=j3pdNPYRvwk'> Study </a>", completed: true, date: "11-10-2019"},
      {name: "Complete homework", completed: true, date: "2-11-2019"},
      {name: "Submit homework", completed: true, date: "18-11-2019"},
    ]
  };
  
  render() {
    return (
      <div className="App">
        <div className="container">

          <div class="col">
            <Audio />;
          </div>

          <div class="col">
            <PageTitle />
          </div>

          <div class="col">
            <Quote />
            <QuoteAuthor />
          </div>

          <div class="col">
            <TasksLeft let count={this.state.remainingTasks.length} />
            <AddTask />
          </div>

          <div class="row">
            <div class="col" id="TaskColumn">
              <RemainingTitle />
            
            <p>{this.state.remainingTasks.map(remainingTasks => {
                return (
                <remainingTasks 
                name={remainingTasks.name} 
                date={remainingTasks.date} 
                />
                );
              })};
            </p>   
            

              
            </div>

            <div class="col" >
              <CompletedTitle />
              <TaskItemCompleted />
            </div>
          </div>

          <div class="col" id="ChangesColumn">
            <Changes />
          </div>

        </div>
      </div>
    );
  }
}

export default App;

