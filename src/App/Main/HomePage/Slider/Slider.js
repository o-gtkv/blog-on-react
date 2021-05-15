import React, { Children } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Autoplay])

const Slider = ({backgroundImage, height, ...props}) => {    
    const style = {
        backgroundImage: `url(${backgroundImage})`,
        height: height,
        textAlign: 'center'
    }

    return (                
        <div style={style}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <Swiper style={{top: '100%'}} autoplay={{delay: 3000}} loop={true}> 
                            {
                                Children.map(props.children, child => (
                                    <SwiperSlide>{child}</SwiperSlide>                                
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>            
        </div>        
    )
}

export default Slider