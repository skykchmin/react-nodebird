import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useCallback } from 'react';

import { Form, Input, Button } from 'antd';
import { addPost } from '../reducers/post'; 

const PostForm = () => {
    const {imagePaths} = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);
    const onSubmit = useCallback(() => {
        dispatch(addPost);
    }, []);

    return (
        <Form style={{ margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea 
                value={text} 
                onChange={onChangeText}
                maxLength={140}
                placeholder="무슨일이 있었나요?"
            />
            <div>
                <input type="file" multiple hidden />
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">등록</Button>
            </div>
            <div>
                {imagePaths.map((v) => {
                    <div key={v} style={{ display: 'inline-block'}}>
                        <img src={v} style={{ width: '200px'}} alt={v} /> 
                    </div>
            })}
            </div>
        </Form>
    );
};

export default PostForm;