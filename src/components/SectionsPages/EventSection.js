import React from 'react'
import Image1 from "../../images/EventDays/service banner.jpg";
import Image2 from "../../images/EventDays/Sunday service.jpg";
import Image3 from "../../images/EventDays/winepress-banner.jpg";
import ShareContent from '../Others/ShareContent';

const EventSection = () => {
  return (
    <div class="event padding--top padding--bottom">
      <div class="container">
        <div class="section__header text-center">
          <h2>Weekly Activities</h2>
          <p>
            Join us this week at Love Bound Family as we embark on a
            transformative journey of worship, fellowship, and learning,
            embracing God's love and purpose in our lives.
          </p>
        </div>
        <div class="section__wrapper">
          <div class="row g-4 justify-content-center">
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="event__item">
                <div class="event__inner">
                  <div class="event__thumb">
                    <a href="event-single.html">
                      <img src={Image2} alt="event thumb" />
                    </a>
                    <div class="event__thumb-date">
                      <h6>Every</h6>
                      <p>Sunday</p>
                    </div>
                  </div>
                  <div class="event__content">
                    <a href="event-single.html">
                      <h5>Our Sunday Service</h5>
                    </a>
                    <div class="event__metapost">
                      <ul class="event__metapost-info">
                        <li>
                          <i class="far fa-clock"></i> 7am - 12pm
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt"></i> P&O Lecture
                          hall, OLD SEET HEAD,
                        </li>
                      </ul>
                      <ul class="event__metapost-comentshare">
                        <li class="event__metapost-coment">
                          <i class="far fa-comments"></i>
                          <a href="#" class="event__metapost-count">
                            10
                          </a>
                        </li>
                        <li class="event__metapost-share">
                          <i class="fas fa-share-alt"></i>
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
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Welcome to Love Bound Family's uplifting and
                      soul-nourishing service, where we gather to worship,
                      learn, and experience the boundless love of God together
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="event__item">
                <div class="event__inner">
                  <div class="event__thumb">
                    <a href="event-single.html">
                      <img src={Image1} alt="event thumb" />
                    </a>
                    <div class="event__thumb-date">
                      <h6>every</h6>
                      <p>week</p>
                    </div>
                  </div>
                  <div class="event__content">
                    <a href="event-single.html">
                      <h5>Love Bound Family</h5>
                    </a>
                    <div class="event__metapost">
                      <ul class="event__metapost-info">
                        <li>
                          <i class="fas fa-heart"></i>An Oasis of Love
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt"></i> P&O Lecture
                          hall, OLD SEET HEAD
                        </li>
                      </ul>
                      <ul class="event__metapost-comentshare">
                        <li class="event__metapost-coment">
                          <i class="far fa-comments"></i>
                          <a href="#" class="event__metapost-count">
                            10
                          </a>
                        </li>
                        <li class="event__metapost-share">
                          <i class="fas fa-share-alt"></i>
                          <ul>
                            <li>
                              <a href="#">
                                <ShareContent
                                  contentUrl={"#"}
                                  contentTitle={"#"}
                                />
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
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Join us for our services at Love Bound Family, where each
                      gathering is a sacred opportunity to encounter God's love,
                      grow in faith, and experience the warmth of our inclusive
                      community
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="event__item">
                <div class="event__inner">
                  <div class="event__thumb">
                    <a href="event-single.html">
                      <img src={Image3} alt="event thumb" />
                    </a>
                    <div class="event__thumb-date">
                      <h6>Every</h6>
                      <p>Wed</p>
                    </div>
                  </div>
                  <div class="event__content">
                    <a href="event-single.html">
                      <h5>Winepress</h5>
                    </a>
                    <div class="event__metapost">
                      <ul class="event__metapost-info">
                        <li>
                          <i class="far fa-clock"></i> 4pm - 7pm
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt"></i> P&O Lecture
                          hall, OLD SEET HEAD
                        </li>
                      </ul>
                      <ul class="event__metapost-comentshare">
                        <li class="event__metapost-coment">
                          <i class="far fa-comments"></i>
                          <a href="#" class="event__metapost-count">
                            10
                          </a>
                        </li>
                        <li class="event__metapost-share">
                          <i class="fas fa-share-alt"></i>
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
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Step into the transformative 'Winepress' midweek service
                      at Love Bound Family, where we press into the richness of
                      God's presence, refining our faith and experiences to
                      produce the finest spiritual vintage
                    </p>
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

export default EventSection
