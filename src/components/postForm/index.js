import React, { Component } from 'react';
import './postForm.css';



export default class Form extends Component {
    state = { title: '', author: '', link: ''};
    render() {
        return (
        <form  className="form bg-dark text-light">
            <h3>Add a game news post</h3>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Post Title"></input>
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Name of Author"></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Link to Article etc."></input>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
        );
    }
}