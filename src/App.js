import React from 'react';
import './App.css';

import Audio from './Components/Header/Header.js/Audio/Audio';
import PageTitle from './Components/Header/Header.js/PageTitle';
import Quote from './Components/Header/Header.js/Quote';
import QuoteAuthor from './Components/Header/Header.js/QuoteAuthor';

import AddTask from './Components/Nav/Nav.js/AddTaskInput';
import TasksLeft from './Components/Nav/Nav.js/TasksLeft';
import TaskItemRemaining from './Components/Nav/Nav.js/TaskItemRemaining';
import TaskItem from './Components/Nav/Nav.js/TaskItem';
import TaskItemCompleted from './Components/Nav/Nav.js/TaskItemCompleted';
import Changes from './Components/Nav/Nav.js/Changes';

function App() {
  return (
    <div className="container">

      <Audio/>;
      
      <PageTitle/>
      
      <Quote/>
      
      <QuoteAuthor/>
      
      <TasksLeft/>
      <AddTaskInput/>
      
      <RemainingTitle/>
      <TaskItemRemaining/>
      
      <CompletedTitle/>
      <TaskItemCompleted/>
      
      <Changes/>
      
    </div>
  );
}

export default App;

