import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import PostForm from '../src/components/postForm/';


storiesOf("Game App/Post Form", module).add("default", () => <PostForm />);
