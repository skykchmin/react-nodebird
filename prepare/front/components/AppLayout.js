import React, {useState} from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

import styled from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align: middle; 
`;

const AppLayout = ({ children }) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false); //더미데이터로 setIsLoggedIn을 LoginForm으로 넘겨준다.

    return(
    <div>
        <Menu mode="horizontal">
            <Menu.Item>
                <Link href="/"><a>노트버드</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/profile"><a>프로필</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Input.Search enterButton/>
            </Menu.Item>
            <Menu.Item>
                <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>

        </Menu>
        <Row gutter={8}> {/* gutter : 컬럼 사이의 간격 */} 
            <Col xs={24} md={6}> {/* 모바일일때는 24등분한것중에 어느정도 차지할 것이냐 , 작은 태블릿일때는 25%*/}
                {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn} /> } {/* setIsLoggedIn을 LoginForm으로 넘겨준다. */} 
            </Col>
            <Col xs={24} md={12}> 
                {children}
            </Col>                
            <Col xs={24} md={6} >
                <a href="https://github.com/skykchmin" target="_blank" rel="noreferrer noopener">Mady by skykchmin</a>
            </Col>
        </Row>
    </div>
    )
    
};

AppLayout.propTypes = {
    children: propTypes.node.isRequired,
};

export default AppLayout;