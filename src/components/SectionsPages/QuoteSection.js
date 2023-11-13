import React from 'react'
import image from "../../images/bg-img/03.jpg"

const QuoteSection = () => {
  return (
    <div
      class="qoute padding--top padding--bottom bg-img"
      style={{background: `url(${image}) rgba(0, 0, 0, .4)`}}
    >
      <div class="container">
        <div class="qoute__slider overflow-hidden">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="qoute__item">
                <div class="qoute__inner align-items-center">
                  <div class="qoute__thumb">
                    <h4>Quote From </h4>
                    <span>Peter</span>
                    <i class="fas fa-quote-left"></i>
                  </div>
                  <div class="qoute__content">
                    <blockquote class="qoute__content-blockquote">
                      <p>
                      peter (s) Said "It is Better For Any Of You To
                        Carry A Load Of Firewood On His Own Back Than To Beg
                        From Someone Else"
                      </p>
                      <h4>peter, Chapter 59, verse 20</h4>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteSection
