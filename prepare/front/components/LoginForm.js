import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link' ;
import styled from 'styled-components' ;
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

const ButtonWapper = styled.div` 
    marginTop: 10px;
    `;
    // // 버튼 컴포넌트를 하나 만드는데 styled 하면 div컴포넌트가 된다. 

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e)=> {//컴포넌트에 props로 넘겨주는 함수는 useCallback을 꼭 써달라
    //     setId(e.target.value);
    // }, []);
    
    // const [password, setPassword] = useState('');
    // const onChangePassword = useCallback((e)=> {//컴포넌트에 props로 넘겨주는 함수는 useCallback을 꼭 써달라
    //     setPassword(e.target.value);
    // }, []);

    const onSubmitForm = useCallback(() => { //컴포넌트에대 넣는거면 useCallback을 사용해야한다.
        console.log(id,password);
        setIsLoggedIn(true); //로그인 폼에서 로그인을 하는 순간 isLoggedin이 true로 바뀌면서 user프로필로 바뀐다
    }, [id, password]);

    return(
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input 
                    name="user-id" 
                    value={id} 
                    onChange={onChangeId} 
                    required
                    />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input 
                    name="user-password" 
                    type="password"
                    value={password} 
                    onChange={onChangePassword} 
                    required
                    />
            </div>
            <ButtonWapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWapper>
        </FormWrapper>
    );
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
}


export default LoginForm;