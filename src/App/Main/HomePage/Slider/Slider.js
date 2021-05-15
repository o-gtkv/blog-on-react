import React, { Children } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Autoplay])

const Slider = ({backgroundImage, height, ...props}) => {    
    const swiperWrapperStyle = {
        backgroundImage: `url(${backgroundImage})`,
        height: height,
        textAlign: 'center',
    }

    const swiperStyle = {
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',        
    }

    return (                
        <div style={swiperWrapperStyle}>
            <Swiper style={swiperStyle} autoplay={{delay: 3000}} loop={true}> 
                {
                    Children.map(props.children, child => (
                        <SwiperSlide>{child}</SwiperSlide>                                
                    ))
                }
            </Swiper>
        </div>        
    )
}

export default Slider