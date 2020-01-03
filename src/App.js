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

import Changes from './Components/Nav/Nav.js/Changes';

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

    // Filtreaza coloana remainingTask vs. completedTasks in functie de isCompleted (true/false)

    const remainingTasks = this.state.tasks.filter(t => !t.isCompleted);
    const completedTasks = this.state.tasks.filter(t => t.isCompleted);



    // Const onDelete este o functie care primeste numele task-ului pe care s-a dat delete
    // si returneaza o functie pentru onClick
    // unde taskurile up-to-date sunt toate minus cele la care s-a apasat butonul Delete
    // Se salveaza in state taskurile up-to-date

    const onDelete = (name) => () => { 
      const currentTasks = this.state.tasks.filter(task => task.name !== name);

      this.setState({ tasks: currentTasks });
    };



    // Const onComplete este o functie care primeste numele task-ului pe care s-a dat delete
    // si returneaza o functie pentru onClick
    // unde taskurile up-to-date sunt un nou array de taskuri in care 
    // daca taskul e acelasi cu taskul la care s-a dat click, schimba isCompleted de la "false" la "true"
    // apoi return task 
    // Updateaza state-ul cu taskurile up-to-date

    const onComplete = (name) => () => {
      const currentTasks = this.state.tasks.map(task => {
        if (task.name === name) {
          task.isCompleted = true;
        }

        return task;
      });

      this.setState({ tasks: currentTasks });
    };



    // Const onAdd este de tip functie in care 
    // taskurile up-to-date sunt cele existente la care se adauga (concatenare)
    // un task proaspat submitted, (care nu a fost finalizat si la care nu s-a apasat inca Delete)
    // Updateaza state-ul cu taskurile din arrayul original plus taskul nou introdus intre ghilimelele din input 

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



    // Const onTextEnter este de tip functie in care se poate introduce un text (input)
    // iar textul introdus drept task nou este introdus in state
    
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

          <div class="col" id="ChangesColumn">
            <Changes />
          </div>

        </div>
      </div>
    );
  }
}

export default App;


