import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link' ;
import styled from 'styled-components' ;
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { loginAction } from '../reducers/user';
import { useDispatch } from 'react-redux';

const ButtonWapper = styled.div` 
    marginTop: 10px;
    `;
    // // 버튼 컴포넌트를 하나 만드는데 styled 하면 div컴포넌트가 된다. 

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => { //컴포넌트에대 넣는거면 useCallback을 사용해야한다.
        console.log(id,password);
        dispatch(loginAction({id, password}));
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


export default LoginForm;