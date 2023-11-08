import React from 'react'

// Images
import Image1 from "../../images/sponsor/01.png";
import Image2 from "../../images/sponsor/02.png";
import Image3 from "../../images/sponsor/03.png";
import Image4 from "../../images/sponsor/04.png";

const SponsorSection = () => {
  return (
    <div class="sponsor">
        <div class="container">
            <div class="sponsor__slider overflow-hidden">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="sponsor__item">
                            <div class="sponsor__inner">
                                <div class="sponsor__thumb">
                                    <img src={Image1} alt="sponsor thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="sponsor__item">
                            <div class="sponsor__inner">
                                <div class="sponsor__thumb">
                                    <img src={Image2} alt="sponsor thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="sponsor__item">
                            <div class="sponsor__inner">
                                <div class="sponsor__thumb">
                                    <img src={Image3} alt="sponsor thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="sponsor__item">
                            <div class="sponsor__inner">
                                <div class="sponsor__thumb">
                                    <img src={Image4} alt="sponsor thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SponsorSection
