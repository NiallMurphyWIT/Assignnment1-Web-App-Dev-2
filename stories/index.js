import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import PostForm from '../src/components/postForm/';
import PostItem from '../src/components/postItem';
import PostList from '../src/components/postList';
import { action } from "@storybook/addon-actions";


const post = {
    id: 1 ,
    title : 'Post 1. Patch Notes',
    link : 'https://tftactics.gg/patch-notes',
    author : 'Joey',
    comments : [],
    upvotes: 10
};


storiesOf("Game App/Post Form", module).add("default", () => <PostForm />);


storiesOf('Game App/Post Item', module)
    .add("default", () => <PostItem post={post} upvoteHandler={action("upvoted")} /> )
    .add("No hyperlink", () => <PostItem post={{ ...post, link: "" }} upvoteHandler={action("upvoted")}/>);

    storiesOf('Game App/Post List', module)
    .add('default', () => { 
        const defaultPosts = [
            { ...post, id: 1, title: 'Post 1', upvotes: 10 },
            { ...post, id: 2, title: 'Post 2', upvotes: 20 },
            { ...post, id: 3, title: 'Post 3', upvotes: 30 },
            { ...post, id: 4, title: 'Post 4', upvotes: 40 }
        ];
    return <PostList posts= { defaultPosts }  />
});