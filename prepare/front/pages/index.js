import React from 'react'
import { useSelector } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import AppLayout from '../components/AppLayout';

const Home = () => {
    const { isLoggedin } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    return (
        <AppLayout>
            {isLoggedin && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    );
};

export default Home;