import React from 'react';
import './App.css';
import UserGreeting from './components/UserGreeting';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>React Компоненти</h1>
      <UserGreeting name="Анастасія" />
      <hr />
      <Counter />
      <hr />
      <CounterClass />
    </div>
  );
}

export default App;