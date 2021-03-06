import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

import { useDispatch } from 'react-redux';

import { logoutAction } from '../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, []);

    return(
        <Card
            actions={[ //배열이기 떄문에 key가 필요하다
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followings">짹쨱<br />0</div>,
            ]}
        >
            <Card.Meta
                avatar = {<Avatar>skykchmin</Avatar>}
                title="skykchmin"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}

export default UserProfile;