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
    <div className="container" id="container">
      
      <div class="col">
        <Audio/>;
      </div>

      <div class="col">
        <PageTitle/>
      </div>

      <div class="col">
        <Quote/>
        <QuoteAuthor/>
      </div>

      <div class="col">
        <TasksLeft/>
        <AddTask/>
      </div>

      <div class="row">
        <div class="col">
          <RemainingTitle/> 
          <TaskItemRemaining/>
        </div>

        <div class="col">
          <CompletedTitle/>
          <TaskItemCompleted/>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div class="col">
          <Changes/>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  );
}

export default App;

