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

function App() {
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
          <TasksLeft />
          <AddTask />
        </div>

        <div class="row">
          <div class="col" id="TaskColumn">
            <RemainingTitle />
            <TaskItemRemaining />
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

export default App;

