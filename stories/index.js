import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import PostForm from '../src/components/postForm/';
import PostItem from '../src/components/postItem';


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
    .add('default', () => <PostItem post= { post }  />
    )
    .add('No hyperlink', () => <PostItem post= { { ...post, link: ''} }  />
    )