import React from 'react'
import Logo from "../../images/logo/lb-logo.jpg";
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header class="header">
      <div class="navbar-expand-xl">
        <div class="collapse navbar-collapse m-0 p-0" id="menubar2">
          <div class="header__top w-100  m-1 p-0">
            <div class="container">
              <div class="header__top-area">
                <div class="header__top-left">
                  <ul>
                    <li>
                      <i class="fas fa-phone-alt"></i>
                      +234 813 839 7603
                    </li>
                    <li>
                      <i class="fas fa-envelope"></i>
                      info@lbfmail.com
                    </li>
                  </ul>
                </div>
                <div class="header__top-center">
                  <div class="header__top-logo d-none d-md-block">
                    <Link to="index.html">
                      <img
                        className="rounded-pill  "
                        style={{ width: "90px" }}
                        src={Logo}
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
                <div class="header__top-right">
                  <div class="header__top-socialsearch">
                    <div class="header__top-social mx-o px-0">
                      <ul class=" mx-0">
                        <li>
                          <Link
                            to="https://www.facebook.com/LBFFUTO/"
                            target="_blank"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i class="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i class="fab fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i class="fab fa-pinterest-p"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div class="header__top-search">
                      <ul>
                        <li class="search__icon">
                          <i class="fas fa-search"></i>
                        </li>
                        <li class="cart__icon">
                          <i class="fas fa-shopping-bag"></i>
                          <span>04</span>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="header__bottom">
        <div class="container">
          <div class="header__mainmenu navbar navbar-expand-xl navbar-light">
            <div class="header__logo">
              <Link to="index.html" class="d-none d-xl-block">
                <img
                  className="rounded-pill  "
                  style={{ width: "60px" }}
                  src={Logo}
                  alt="logo"
                />
              </Link>
              <Link to="index.html" class="d-xl-none">
                <img
                  className="rounded-pill  "
                  style={{ width: "70px" }}
                  src={Logo}
                  alt="logo"
                />
              </Link>
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
                  <li className={props.class}>
                    <Link className={props.class} index>
                      Home
                    </Link>
                    {/* <ul>
                      <li>
                        <a href="index.html" class="class">
                          Home Page Christian
                        </a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Page Muslim</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Page Hindu</a>
                      </li>
                    </ul> */}
                  </li>
                  <li class={props.class}>
                    <Link to="/Events#">Events</Link>
                    {/* <ul>
                      <li>
                        <a href="event.html">Event Two Column</a>
                      </li>
                      <li>
                        <a href="event-2.html">Event Three Column</a>
                      </li>
                      <li>
                        <a href="event-single.html">Event Single</a>
                      </li>
                    </ul> */}
                  </li>
                  <li class={props.class}>
                    <Link to="/Cause">Cause</Link>
                  </li>
                  <li class={props.class}>
                    <Link to="/Gallery">Gallery</Link>
                  </li>
                  <li class={props.class}>
                    <Link to="/Sermons">Sermons</Link>
                    {/* <ul>
                      <li>
                        <a href="sermon.html">Sermons 2 Columns</a>
                      </li>
                      <li>
                        <a href="sermon-single.html">Sermons Single</a>
                      </li>
                    </ul> */}
                  </li>
                  <li class={props.class}>
                    <Link to="/Blog">Blog</Link>
                    {/* <ul>
                      <li>
                        <a href="blog.html">Blog Default</a>
                      </li>
                      <li>
                        <a href="blog-2.html">Blog 2 Columns</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Single</a>
                      </li>
                    </ul> */}
                  </li>
                  {/* <li class={props.class}>
                    <Link to="#0">Shop</Link>
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
                  </li> */}
                  <li class={props.class}>
                    <Link to="/Contact">Contact Us</Link>
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
