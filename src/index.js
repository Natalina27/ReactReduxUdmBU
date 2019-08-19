import React from 'react'
import ReactDOM from 'react-dom'

function TodoItem(){
  return(
    <span>Drink coffee </span>
  );
}

ReactDOM.render(<TodoItem />, document.getElementById('root'));

function TodoList(){
  return(
    <ul>
      <li><TodoItem /></li>
      <li><TodoItem /></li>
      <li><TodoItem /></li>
    </ul>
  );
}

ReactDOM.render(<TodoList />, document.getElementById('root'));
