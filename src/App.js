import React from 'react';
import './App.css';
import Audio from './Audio';
import PageTitle from './PageTitle';
import Quote from './Quote';
import QuoteAuthor from './QuoteAuthor';
import AddTask from './AddTaskInput';
import TasksLeft from './TasksLeft';
import RemainingTasks from './RemainingTasks';
import TaskItem from './TaskItem';
import CompletedTasks from './CompletedTasks';
import Changes from './Changes';

function App() {
  return (
    <div className="container">

      <Audio/>;
      <br>
      <br>
      <br>
      <PageTitle/>
      <br>
      <Quote/>
      <br>
      <QuoteAuthor/>
      <br>
      <br>
      <br>
      <TasksLeft/>
      <AddTaskInput/>
      <br>
      <br>
      <RemainingTitle/>
      <RemainingTasks/>
      <br>
      <CompletedTitle/>
      <CompletedTasks/>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <Changes/>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      
    </div>
  );
}

export default App;

