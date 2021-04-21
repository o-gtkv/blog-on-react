import React from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Slider.css'

SwiperCore.use([Autoplay])

const Slider = () => {
    return (
        <section className="slider-section slider-section--bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <Swiper autoplay={{delay: 3000}} loop={true}>
                            <SwiperSlide>
                                <div className="slide-text">
                                    Welcome to the place full of healthy food and ideas to keep you fit
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider