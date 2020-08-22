import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import ImagesZoom from './ImagesZoom';

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false); // 이미지를 클릭했을 때, 이미지가 확대될 수 있게하는 것

    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);
    const onClose = useCallback(()=> {
        setShowImagesZoom(false);
    }, []);

    if (images.length === 1 ){ // 이미지가 한개이면 화면 꽉차게 하고, 이미지 갯수에 따라 화면 
        return(
            <>
                <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        );
    }
    if (images.length === 2 ){ // 이미지가 2개이면  
        return(
            <>
                <img role="presentation" style={{width:'50%', display: 'inline-block'}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
                <img role="presentation" style={{width:'50%', display: 'inline-block'}} src={images[1].src} alt={images[0].src} onClick={onZoom} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        );
    }
    
    
    return(
        <>
            <div>
                <img role="presentation" style={{width:'50%'}} src={images[0].src} alt={images[0].src} onClick={onZoom} /> 
                <div 
                role="presentation" 
                style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle'}} 
                onClick={onZoom}
                >
                    <PlusOutlined />
                    <br />
                    {images.length - 1} 개의 사진 더보기

                </div>
            </div>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
    )
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object)
}

export default PostImages;