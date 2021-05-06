import React, { Children } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.min.css'
import './Slider.css'

SwiperCore.use([Autoplay])

const Slider = ({backgroundImage, ...props}) => {
    return (
        <section className="slider-section" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <Swiper autoplay={{delay: 3000}} loop={true}>
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
        </section>
    )
}

export default Slider