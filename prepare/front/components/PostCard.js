import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined} from '@ant-design/icons';
import { Card, Popover, Button, Avatar, List, Comment } from 'antd';

import PostImages from './PostImages';
import CommentForm from './CommentForm';

const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []);

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
            {commentFormOpened && (
                <div>
                    <CommentForm post={post}/> {/* CommentForm post={post} 을 해주는 이유: 댓글은 게시글에 속해있다. 어떤 글에 댓글을 달건지 정보가 필요 , 게시글의 id가 필요 */}
                    <List
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments} // post.Comments가 각각 item으로 들어간다.
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>    
            )}
            
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