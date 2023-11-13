import React from 'react'
import About from "../../images/footer/about/01.jpg"
import Post1 from "../../images/footer/post/01.jpg"
import Post2 from "../../images/footer/post/02.jpg";
import Post3 from "../../images/footer/post/03.jpg";
import Logo from "../../images/img/lb-logo.jpg";

const FooterSection = () => {
  return (
    <footer class="footer">
      <div class="footer__top padding--top padding--bottom">
        <div class="container">
          <div class="row g-4">
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="footer__about">
                <div class="section__header">
                  <h2>About Peace</h2>
                </div>
                <div class="section__wrapper">
                  <div class="footer__about-thumb">
                    <img src={About} alt="footer thumb" class="w-100" />
                  </div>
                  <div class="footer__about-contet">
                    <p>
                      Dramatically strategize economically sound action items
                      for e-business niches. Quickly re-engineer 24/365
                      potentialities before.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="footer__tags">
                <div class="section__header">
                  <h2>Post Tag</h2>
                </div>
                <div class="section__wrapper">
                  <ul>
                    <li>
                      <a href="#">Christian</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Photography</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="footer__post">
                <div class="section__header">
                  <h2>Recent Post</h2>
                </div>
                <div class="section__wrapper">
                  <div class="footer__post-item">
                    <div class="footer__post-inner">
                      <div class="footer__post-thumb">
                        <a href="blog-single.html">
                          <img src={Post1} alt="footer post" />
                        </a>
                      </div>
                      <div class="footer__post-content">
                        <a href="blog-single.html">
                          <h6>Collaboratively Coordinate.</h6>
                        </a>
                        <p>
                          <i class="far fa-calendar-alt"></i> 10 January, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="footer__post-item">
                    <div class="footer__post-inner">
                      <div class="footer__post-thumb">
                        <a href="blog-single.html">
                          <img src={Post2} alt="footer post" />
                        </a>
                      </div>
                      <div class="footer__post-content">
                        <a href="blog-single.html">
                          <h6>Quickly Develop Exceptional</h6>
                        </a>
                        <p>
                          <i class="far fa-calendar-alt"></i> 10 January, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="footer__post-item">
                    <div class="footer__post-inner">
                      <div class="footer__post-thumb">
                        <a href="blog-single.html">
                          <img src={Post3} alt="footer post" />
                        </a>
                      </div>
                      <div class="footer__post-content">
                        <a href="blog-single.html">
                          <h6>Why you need Peace WordPress Theme?</h6>
                        </a>
                        <p>
                          <i class="far fa-calendar-alt"></i> 10 January, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="footer__links">
                <div class="section__header">
                  <h2>Useful Links</h2>
                </div>
                <div class="section__wrapper">
                  <ul>
                    <li>
                      <a href="#">Log in</a>
                    </li>
                    <li>
                      <a href="#">
                        Entries <abbr title="RSS">RSS</abbr>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Comments <abbr title="RSS">RSS</abbr>
                      </a>
                    </li>
                    <li>
                      <a href="#">WordPress.org</a>
                    </li>
                    <li>
                      <a href="#">Google</a>
                    </li>
                    <li>
                      <a href="#">Template</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom m-0 p-0">
        <div class="container mx-0">
          <div class="footer__bottom-area text-center ">
            <div class="footer__bottom-logo m-1 p-0">
              <a href="index.html">
                <img
                  src={Logo}
                  style={{ width: "60px" }}
                  alt="footer logo"
                  className="rounded-pill  "
                />
              </a>
            </div>
            <div class="footer__bottom-content mb-1 p-0">
              <p className="m-0 p-0">
                Copyright © 2022 <a href="index.html">Peace</a> | Designed by{" "}
                <a href="https://themeforest.net/user/codexcoder/portfolio">
                  CodexCoder
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection
