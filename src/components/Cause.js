import React from 'react'
import background from "../images/bg-img/02.jpg"

const Cause = () => {
  return (
    <div
      class="cause padding--top padding--bottom bg-img"
      style={{background: `url(${background}) rgba(0, 0, 0, .4);`}}
    >
      <div class="container">
        <div class="section__header text-center">
          <h2 class="text-white">Urgent Causes</h2>
        </div>
        <div class="section__wrapper">
          <div class="cause__top row justify-content-center g-4 row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1">
            <div class="cause__item">
              <div class="cause__inner">
                <div class="cause__content">
                  <h3>82.5%</h3>
                  <h6>Founded</h6>
                </div>
              </div>
            </div>
            <div class="cause__item">
              <div class="cause__inner">
                <div class="cause__content">
                  <h3>$ 1650</h3>
                  <h6>Donate</h6>
                </div>
              </div>
            </div>
            <div class="cause__item">
              <div class="cause__inner">
                <div class="cause__content">
                  <h3>$ 2000</h3>
                  <h6>Goal</h6>
                </div>
              </div>
            </div>
            <div class="cause__item">
              <div class="cause__inner">
                <div class="cause__content">
                  <h3>10</h3>
                  <h6>Donator</h6>
                </div>
              </div>
            </div>
            <div class="cause__item">
              <div class="cause__inner">
                <div class="cause__content">
                  <h3>60</h3>
                  <h6>Day to go</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="cause__bottom">
            <div class="cause__bars">
              <div class="donaterange__content text-center">
                <h4>
                  <span>66% Donated </span> / $10,013 To Go
                </h4>
                <div class="donaterange__bars" data-percent="60%">
                  <div class="donaterange__bar"></div>
                </div>
                <a href="causes.html" class="default-btn move-right">
                  <span>
                    Donate <i class="fas fa-heart"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cause
