import React, { Component } from 'react'; //destructured component and import react
import Task from './Task'
import { withTracker } from 'meteor/react-meteor-data'; //grabs data from database

import { Tasks } from '../api/tasks.js' // Mongo Collection


class App extends Component {

    renderTasks(){
        return this.props.tasks.map((task) => (
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

// Magic:

export default withTracker(() => { // first call returns a function, second one passes tasks.
    return {
        tasks: Tasks.find({}).fetch() // .find empty object is the same as .find all
    };
})(App) // returns a function that we call