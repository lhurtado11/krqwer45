import React, { Component } from 'react';
import './index.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    }
  }

  changeDone = (index) => {
    this.setState ({
      tasks: this.state.tasks.map( e => {
        if (e.id === index) {
          e.done = !e.done
        }
        return e
      })
    }) 
  }

  onSubmit(e) {
    if(this.state.newTask === '') {

    } else {
      const task = {
        id:   this.state.tasks.length + 1,
        name: this.state.newTask,
        done: false
      }

      console.log(task, e.target.value)
      this.setState({
        tasks: [...this.state.tasks, task],
        newTask: ''
      })
    }
    
    e.preventDefault()
  }

  handleChange(e) {
    this.setState({
      newTask: e.target.value
    })
  } 

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task) => <li className={task.done ? 'done' : null} onClick={() => this.changeDone(task.id)} key={task.id}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input className={!this.state.newTask ? 'error' : null} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.handleChange.bind(this)} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
