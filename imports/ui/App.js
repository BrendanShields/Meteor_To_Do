import React, { Component } from 'react'; //destructured component and import react
import Task from './Task'

export default class App extends Component {
    getTasks(){
        return [
            {_id: 1, text: 'This is the first task'},
            {_id: 1, text: 'This is the second task'},
            {_id: 1, text: 'This is the third task'},
            {_id: 1, text: 'This is the fourth task'},
            
        ]
    }

    renderTasks(){
        return this.getTasks().map((task) => (
            <Task key={task._id} task={task} /> 
        ))
    }
    render() {
        return (
            <div className="container"> 
                <header>
                <h1>To Do</h1> 
                </header>
                <ul>
                    {this.renderTasks()}
                </ul>
                
            </div>
        )
    }
}