import React from 'react'

import Image1 from "../images/sermon/01.jpg"
import Image2 from "../images/sermon/02.jpg";
import Image3 from "../images/sermon/03.jpg";
import Image4 from "../images/sermon/04.jpg";

const SermonSection = () => {
  return (
    <div class="sermon padding--top padding--bottom bg-light">
        <div class="container">
            <div class="section__header text-center">
                <h2>Latest Sermons</h2>
                <p>Proin Eget Tortor Risus. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
            </div>
            <div class="section__wrapper">
                <div class="row g-4">
                    <div class="col-lg-6 col-12">
                        <div class="sermon__item">
                            <div class="sermon__inner">
                                <div class="sermon__thumb">
                                    <img src={Image1} alt="sermon thumb" />
                                </div>
                                <div class="sermon__content">
                                    <a href="sermon-single.html"><h6>Lorem ipsum dolor sit amet, consectetur adipisicing</h6></a>
                                    <ul class="sermon__content-metapost">
                                        <li><i class="far fa-calendar"></i> 10 Jan 2022</li>
                                        <li><i class="fas fa-user"></i> Admin</li>
                                    </ul>
                                    <ul class="sermon__content-social">
                                        <li><a href="#"><i class="fas fa-video"></i></a></li>
                                        <li><a href="#"><i class="fas fa-headphones-alt"></i></a></li>
                                        <li><a href="#"><i class="fas fa-file-alt"></i></a></li>
                                        <li><a href="#"><i class="fas fa-image"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="sermon__item">
                            <div class="sermon__inner">
                                <div class="sermon__thumb">
                                    <img src={Image2} alt="sermon thumb" />
                                </div>
                                <div class="sermon__content">
                                    <a href="sermon-single.html"><h6>Seamlessly embrace distributed portals whereas maintainable platforms.</h6></a>
                                    <ul class="sermon__content-metapost">
                                        <li><i class="far fa-calendar"></i> 10 Jan 2022</li>
                                        <li><i class="fas fa-user"></i> Admin</li>
                                    </ul>
                                    <ul class="sermon__content-social">
                                        <li><a href="#"><i class="fas fa-video"></i></a></li>
                                        <li><a href="#"><i class="fas fa-headphones-alt"></i></a></li>
                                        <li><a href="#"><i class="fas fa-file-alt"></i></a></li>
                                        <li><a href="#"><i class="fas fa-image"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="sermon__item">
                            <div class="sermon__inner">
                                <div class="sermon__thumb">
                                    <img src={Image3} alt="sermon thumb" />
                                </div>
                                <div class="sermon__content">
                                    <a href="sermon-single.html"><h6>Embrace Seamlessly distributed portals whereas maintainable.</h6></a>
                                    <ul class="sermon__content-metapost">
                                        <li><i class="far fa-calendar"></i> 10 Jan 2022</li>
                                        <li><i class="fas fa-user"></i> Admin</li>
                                    </ul>
                                    <ul class="sermon__content-social">
                                        <li><a href="#"><i class="fas fa-video"></i></a></li>
                                        <li><a href="#"><i class="fas fa-headphones-alt"></i></a></li>
                                        <li><a href="#"><i class="fas fa-file-alt"></i></a></li>
                                        <li><a href="#"><i class="fas fa-image"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="sermon__item">
                            <div class="sermon__inner">
                                <div class="sermon__thumb">
                                    <img src={Image4} alt="sermon thumb" />
                                </div>
                                <div class="sermon__content">
                                    <a href="sermon-single.html"><h6>Lorem ipsum dolor sit amet, consectetur Atque, soluta.</h6></a>
                                    <ul class="sermon__content-metapost">
                                        <li><i class="far fa-calendar"></i> 10 Jan 2022</li>
                                        <li><i class="fas fa-user"></i> Admin</li>
                                    </ul>
                                    <ul class="sermon__content-social">
                                        <li><a href="#"><i class="fas fa-video"></i></a></li>
                                        <li><a href="#"><i class="fas fa-headphones-alt"></i></a></li>
                                        <li><a href="#"><i class="fas fa-file-alt"></i></a></li>
                                        <li><a href="#"><i class="fas fa-image"></i></a></li>
                                    </ul>
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

export default SermonSection
