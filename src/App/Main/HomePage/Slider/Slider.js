import React, { Children } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import CenteredItemsContainer from '../../Components/CenteredItemsContainer/CenteredItemsContainer'

import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Autoplay])

const Slider = ({backgroundImage, height, ...props}) => {
    return (        
        <CenteredItemsContainer backgroundImage={backgroundImage} height={height}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <Swiper centeredSlides={true} autoplay={{delay: 3000}} loop={true}>
                            {
                                Children.map(props.children, child => (
                                    <SwiperSlide>
                                        {child}
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>        
        </CenteredItemsContainer>
    )
}

export default Slider