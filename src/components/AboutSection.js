import React from 'react'
import image1 from "../images/about/pst chizzy.jpg"

const AboutSection = () => {
  return (
    <div class="about padding--top padding--bottom">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-12">
            <div class="about__thumbpart">
              <img src={image1} alt="about" />
              <h3>Pastor Chizzy</h3>
              <span>Church Pastor</span>
              <p>
                Good Day, my beloved congregation. I am
                 Pastor Chizzy, and I am committed to shepherding this
                community with love, faith, and a heart devoted to the teachings
                of our Lord.
              </p>
              <ul>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8 col-12">
            <div class="about__contentpart ms-lg-4 ps-lg-5 border-start">
              <div class="section__header">
                <h2>What We Do?</h2>
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Lorem ipsum dolor sit amet,consectetur adipiscing
                  elit. Curabitur aliquet quam id dui posuere blandit.
                </p>
              </div>
              <div class="section__wrapper">
                <div class="about__item">
                  <div class="about__inner">
                    <div class="about__icon">
                      <i class="fas fa-briefcase"></i>
                    </div>
                    <div class="about__content">
                      <h5>Glorify God</h5>
                      <p>
                        Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Mauris blandit aliquet elit, eget
                        tincidunt nibh pulvinar a.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="about__item">
                  <div class="about__inner">
                    <div class="about__icon">
                      <i class="fas fa-binoculars"></i>
                    </div>
                    <div class="about__content">
                      <h5>Love Community</h5>
                      <p>
                        Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Mauris blandit aliquet elit, eget
                        tincidunt nibh pulvinar a.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="about__item">
                  <div class="about__inner">
                    <div class="about__icon">
                      <i class="fas fa-rocket"></i>
                    </div>
                    <div class="about__content">
                      <h5>Believe Biblically</h5>
                      <p>
                        Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Mauris blandit aliquet elit, eget
                        tincidunt nibh pulvinar a.
                      </p>
                    </div>
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

export default AboutSection
