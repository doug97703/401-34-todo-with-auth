import React from 'react'
import '../todo/todo.scss';

export default props => {

  return (
    <div id="form">
      <h3>Add Item</h3>
      <form onSubmit={props.addItem}>
        <label>
          <span>Task Name: </span>
          <input name="text" placeholder="Name" onChange={props.update} />
        </label>
        <br></br>
        <br></br>
        <label>
          <span>Difficulty Rating: </span>
          <input type="range" min="1" max="5" name="difficulty" defaultValue="3" onChange={props.update} />
        </label>
        <br></br>
        <br></br>
        <label>
          <span>Assigned To: </span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={props.update} />
        </label>
        <br></br>
        <br></br>
        <label>
          <span>Due: </span>
          <input type="date" name="due" onChange={props.update} />
        </label>
        <button id="btn">Add Item</button>
      </form>
    </div>
  )
}

