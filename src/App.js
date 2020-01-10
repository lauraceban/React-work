import React from 'react';
import './App.css';

import Audio from './Components/Header/Header.js/Audio';
import PageTitle from './Components/Header/Header.js/PageTitle';
import Quote from './Components/Header/Header.js/Quote';
import QuoteAuthor from './Components/Header/Header.js/QuoteAuthor';

import TasksLeft from './Components/Nav/Nav.js/TasksLeft';
import AddTask from './Components/Nav/Nav.js/AddTask';

import RemainingTitle from './Components/Nav/Nav.js/RemainingTitle';

import CompletedTitle from './Components/Nav/Nav.js/CompletedTitle';
import TaskItemCompleted from './Components/Nav/Nav.js/TaskItemCompleted';

// import Changes from './Components/Nav/Nav.js/Changes';

import TaskItemRemaining from './Components/Nav/Nav.js/TaskItemRemaining';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          name: <>Do the <a href='https://www.youtube.com/watch?v=6SlwnNKsidw'> Christmas</a> shopping</>,
          date: "20-12-2019",
          isCompleted: false,
          isDeleted: false
        }, {
          name: "Attend medical appointment",
          date: "20-12-2019",
          isCompleted: false,
          isDeleted: false
        }, {
          name: "Apply for travelling Visa",
          date: "20-12-2019",
          isCompleted: false,
          isDeleted: false
        }, {
          name: <>Attend the <a href='https://www.youtube.com/watch?v=K2snTkaD64Uw'>opera</a> performance</>,
          date: "20-12-2019",
          isCompleted: false,
          isDeleted: false
        }, {
          name: <>Choose activities for each honeymoon <a href='https://www.nomadicmatt.com/travel-guides/indonesia-travel-tips/bali'>destination</a></>,
          date: "20-12-2019",
          isCompleted: false,
          isDeleted: false
        }, {
          name: "Submit honeymoon requests to travel concierge",
          date: "20-12-2019",
          isCompleted: false,
          isDeleted: false
        }, {
          name: <a href='https://www.youtube.com/watch?v=j3pdNPYRvwk'> Study </a>,
          date: "20-12-2019",
          isCompleted: true,
          isDeleted: false
        }, {
          name: "Complete homework",
          date: "20-12-2019",
          isCompleted: true,
          isDeleted: false
        }, {
          name: "Submit homework",
          date: "20-12-2019",
          isCompleted: true,
          isDeleted: false
        }
      ],
      newTaskText: ""
    };
  }
  
  render() {

    const remainingTasks = this.state.tasks.filter(t => !t.isCompleted);
    const completedTasks = this.state.tasks.filter(t => t.isCompleted);


    const onDelete = (name) => () => { 
      const currentTasks = this.state.tasks.filter(task => task.name !== name);

      this.setState({ tasks: currentTasks });
    };



    const onComplete = (name) => () => {
      const currentTasks = this.state.tasks.map(task => {
        if (task.name === name) {
          task.isCompleted = true;
        }

        return task;
      });

      this.setState({ tasks: currentTasks });
    };


    const onAdd = () => {
      const currentTasks = this.state.tasks.concat([{
        name: this.state.newTaskText,
        date: "20-12-2019",
        isCompleted: false,
        isDeleted: false
      }]);

      this.setState({
        tasks: currentTasks,
        newTaskText: ""
      });
    };
    
    
    const onTextEnter = (text) => {
      this.setState({ newTaskText: text });
    };




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
            <TasksLeft count={remainingTasks.length} />
            
            <AddTask
              taskText={this.state.newTaskText}
              onTextEnter={onTextEnter}
              onAdd={onAdd}
            />
          </div>

          <div class="row">
            <div class="col" id="TaskColumn">
              <RemainingTitle />
            
            <p>
              {remainingTasks.map(task => {
                return (
                  <TaskItemRemaining 
                    name={task.name} 
                    date={task.date}
                    onDelete={onDelete(task.name)}
                    onComplete={onComplete(task.name)}
                  />
                );
              })};
            </p>   
            
            </div>

            <div class="col" >
              <CompletedTitle />

              {completedTasks.map(task => {
                return (
                  <TaskItemCompleted 
                    name={task.name} 
                    onDelete={onDelete(task.name)}
                  />
                );
              })};
            </div>

          </div>

          
        </div>
      </div>
    );
  }
}

export default App;


