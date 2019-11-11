import React, { Component } from 'react';
import PostList from './components/postList/';
import Form from './components/postForm/';
import api from './dataStore/stubAPI';

export default class App extends Component {    
    render() {
        let posts =  api.getAll();
        return (
            <div className="jumbotron">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-3">
                    <h1><a href="/">Teamfight Tactics Updates and News</a></h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 ">
                    <Form />
                </div>
                <div className="col-md-8">
                    <PostList posts={posts} />
                </div>
            </div>  
        </div>  
        </div>  
        );
    }
}