import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';

import { useSelector } from 'react-redux'; //have to fetch data from global redux store - with help from selectors

const Posts = () => {
    const posts = useSelector((state) => state.posts);    //hook
    const classes = useStyles();

    console.log(posts);

    return(
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;