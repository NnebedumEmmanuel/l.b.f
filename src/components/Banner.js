import React from 'react'
import background1 from "../images/banner/01.jpg"
import background2 from "../images/banner/02.jpg";
import background3 from "../images/banner/03.jpg";

const Banner = () => {
  return (
    <div class="banner__slider banner-style2 overflow-hidden">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="banner" style={{ background: `url(${background1})` }}>
            <div class="container">
              <div class="banner__content ms-lg-auto">
                <h2>We Believe In Huminity</h2>
                <p>
                  Enthusiastically underwhelm quality benefits rather than
                  professional "outside the box" thinking. Distinctively network
                  highly efficient leadership skills
                </p>
                <a href="#" class="default-btn move-right">
                  <span>GET HELP NOW</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="banner" style={{ background: `url(${background2})` }}>
            <div class="container">
              <div class="banner__content">
                <h2>A Powerful Religion Theme</h2>
                <p>
                  Enthusiastically underwhelm quality benefits rather than
                  professional "outside the box" thinking. Distinctively network
                  highly efficient leadership skills
                </p>
                <a href="#" class="default-btn move-right">
                  <span>GET HELP NOW</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="banner" style={{ background: `url(${background3})` }}
            >
            <div class="container">
              <div class="banner__content ms-lg-auto">
                <h2>It"S Useless To Lecture</h2>
                <p>
                  Enthusiastically underwhelm quality benefits rather than
                  professional "outside the box" thinking. Distinctively network
                  highly efficient leadership skills
                </p>
                <a href="#" class="default-btn move-right">
                  <span>GET HELP NOW</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
