import React, { Component } from 'react';
import PostList from './components/postList';
import Form from './components/postForm';

export default class App extends Component {
    render() {
        const testPosts = [
            {  id: 1 ,
                title : 'Rise of the Elements goes Live',
                link : 'https://twitter.com/TFT/status/1191807122847281155',
                author : 'Harry Dunne',
                comments : [],
                upvotes : 55
            },
            { 
                id: 2,
                title : "Patch 9.22 notes",
                link : 'https://na.leagueoflegends.com/en/news/game-updates/patch/teamfight-tactics-patch-922-notes',
                author : 'Dave Lee',
                comments : [],
                upvotes : 34
            },
            { 
                id: 3,
                title : '@ly_keane wins the Rise of the Elements Invitational',
                link : 'https://twitter.com/TFT/status/1190024691936874496',
                author : 'Joey Walsh',
                comments : [],
                upvotes : 78
            },
            { 
                id: 4,
                title : 'TFT ranked rewards announced',
                link : 'https://na.leagueoflegends.com/en/news/community/promotion/be-victorious-2019-ranked-rewards',
                author : 'unknown',  
                comments : [],
                upvotes : 8
            },
            {  id: 5 ,
                title : 'New Set Rise of the Elements Announced',
                link : 'https://nexus.leagueoflegends.com/en-us/2019/10/teamfight-tactics-rise-of-the-elements/',
                author : 'Dave Murphy',
                comments : [],
                upvotes : 65
            },           
            {  id: 6 ,
                title : "Cheat Sheet for new set'",
                link : 'https://twitter.com/Mortdog/status/1186719240692224000',
                author : 'Mortdog',
                comments : [],
                upvotes : 10
            },           
            {  id: 7 ,
                title : 'Larger board size confirmed',
                link : 'https://twitter.com/Mortdog/status/1184882384744800256',
                author : 'Mortdog',
                comments : [],
                upvotes : 23
            }
        ] ;
    return (
        <div className="jumbotron">
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 offset-3">
                <h1><a href="/">Teamfight Tactics Updates</a></h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 ">
                <Form />
            </div>
            <div className="col-md-8">
                <PostList posts={testPosts} />
                </div>
            </div>    
            </div>    
            </div>    
        );
    }
}