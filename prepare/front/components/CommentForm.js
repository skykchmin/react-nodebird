import { Form, Input, Button } from 'antd';
import React, { useCallback, useState } from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CommentForm = ({ post }) => {
    const id = useSelector((state)=> state.user.me?.id);
    const[commentText, onChangeCommentText ] = useInput('');
    const onSubmitComment = useCallback(()=> {
        console.log(post.id, commentText); // post.id 아래에 댓글을 달거기 때문에
    }, [commentText]);
    
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: 'relative', margin: 0}}>
                <Input.TextArea
                value={commentText}
                onChange={onChangeCommentText}
                rows={4}
                />
                <Button style ={{position: 'absolute', right: 0, bottom: -40 }}type="primary" htmlType="submit">삐약</Button>
                
            </Form.Item>
        </Form>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CommentForm;