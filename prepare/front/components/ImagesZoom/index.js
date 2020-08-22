import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

import { Overlay, Global, Header, CloseBtn, ImgWrapper, Indicator, SlickWrapper} from './styles';

const ImagesZoom = ({ images, onClose}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <Overlay>
            <Global /> {/* 태그안에 아무곳이나 넣는 순간 덮어쓰기 적용이 된다.  */}
            <Header>
                <h1>상세 이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
        
            <SlickWrapper>
                <div>
                    <Slick 
                        initialSlide={0} // 초기 이미지를 뭐로 할 것인지 
                        beforeChange={(slide) => setCurrentSlide(slide)}
                        infinite
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}               
                    >
                        
                        {images.map((v) => ( //각각의 한장한상 사진을 넣어준다
                            <ImgWrapper key={v.src}>
                                <img src={v.src} alt={v.src} />
                            </ImgWrapper>
                        ))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide + 1}
                            {' '}
                            /
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        
        </Overlay>
    );
}

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;