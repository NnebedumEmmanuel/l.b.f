import React from 'react'
import Logo from "../images/img/lb-logo.jpg"

const Header = () => {
  return (
    <header class="header">
      <div class="navbar-expand-xl">
        <div class="collapse navbar-collapse" id="menubar2">
          <div class="header__top w-100">
            <div class="container">
              <div class="header__top-area">
                <div class="header__top-left">
                  <ul>
                    <li>
                      <i class="fas fa-phone-alt"></i>
                      +8812 345 678 912
                    </li>
                    <li>
                      <i class="fas fa-envelope"></i>
                      info@lbfmail.com
                    </li>
                  </ul>
                </div>
                <div class="header__top-center">
                  <div class="header__top-logo d-none d-md-block">
                    <a href="index.html">
                      <img
                        className="rounded-pill  "
                        style={{ width: "100px" }}
                        src={Logo}
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
                <div class="header__top-right">
                  <div class="header__top-socialsearch">
                    <div class="header__top-social">
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
                        <li>
                          <a href="#">
                            <i class="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="header__top-search">
                      <ul>
                        <li class="search__icon">
                          <i class="fas fa-search"></i>
                        </li>
                        <li class="cart__icon">
                          <i class="fas fa-shopping-bag"></i>
                          <span>04</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="header__bottom" >
        <div class="container">
          <div class="header__mainmenu navbar navbar-expand-xl navbar-light">
            <div class="header__logo">
              <a href="index.html" class="d-none d-xl-block">
                <img
                  className="rounded-pill  "
                  style={{ width: "100px" }}
                  src={Logo}
                  alt="logo"
                />
              </a>
              <a href="index.html" class="d-xl-none">
                <img
                  className="rounded-pill  "
                  style={{ width: "100px" }}
                  src={Logo}
                  alt="logo"
                />
              </a>
            </div>
            <div class="header__bar">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menubar"
                aria-controls="menubar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <button
                class="navbar-toggler header__bar-info"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menubar2"
                aria-controls="menubar2"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="fas fa-info"></span>
              </button>
            </div>
            <div class="header__menu navbar-expand-xl">
              <div class="collapse navbar-collapse" id="menubar">
                <ul>
                  <li class="active">
                    <a href="#0">Home</a>
                    <ul>
                      <li>
                        <a href="index.html" class="active">
                          Home Page Christian
                        </a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Page Muslim</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Page Hindu</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">Events</a>
                    <ul>
                      <li>
                        <a href="event.html">Event Two Column</a>
                      </li>
                      <li>
                        <a href="event-2.html">Event Three Column</a>
                      </li>
                      <li>
                        <a href="event-single.html">Event Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">Causes</a>
                    <ul>
                      <li>
                        <a href="cause.html">Cause Two Column</a>
                      </li>
                      <li>
                        <a href="cause-single.html">Cause Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">Gallery</a>
                    <ul>
                      <li>
                        <a href="gallery.html">Gallery Default</a>
                      </li>
                      <li>
                        <a href="gallery-2.html">Gallery 4 Columns</a>
                      </li>
                      <li>
                        <a href="gallery-3.html">Gallery 6 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">Sermons</a>
                    <ul>
                      <li>
                        <a href="sermon.html">Sermons 2 Columns</a>
                      </li>
                      <li>
                        <a href="sermon-single.html">Sermons Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">Blog</a>
                    <ul>
                      <li>
                        <a href="blog.html">Blog Default</a>
                      </li>
                      <li>
                        <a href="blog-2.html">Blog 2 Columns</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">Shop</a>
                    <ul>
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="shop-single.html">Shop Single</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart Page</a>
                      </li>
                      <li>
                        <a href="check-out.html">Check Out Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
                <a href="cause-single.html" class="default-btn">
                  <span>
                    Donate Now <i class="fas fa-heart"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
