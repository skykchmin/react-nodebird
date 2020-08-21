import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined} from '@ant-design/icons';
import { Card, Popover, Button, Avatar } from 'antd';

import PostImages from './PostImages';


const PostCard = ({ post }) => {
    const id = useSelector((state) => state.user?.id);
    
    return(
        <div style = {{ marginBottom: 10 }}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                action ={[ //배열안에 jsx를 받으면 key가 필요하다.
                    <RetweetOutlined key="retweet"/>,
                    <HeartOutlined key="heart" />,
                    <MessageOutlined key="comment" />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id 
                                ? ( // 로그인을 했고, 내가 작성한 아이디와 로그인한 아이디가 같으면 
                                <>
                                    <Button>수정</Button>
                                    <Button type="danger">삭제</Button>
                                </>
                            ) 
                            : <Button>신고</Button>}    
                        </Button.Group>
                    )}>
                    <EllipsisOutlined />
                    </Popover>,
                ]}
            >
                <Card.Meta
                    avatar ={ <Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
                
                
            </Card>
            {/* <CommentForm />
            <Comments/> */}
        </div>
        
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired
}

export default PostCard;