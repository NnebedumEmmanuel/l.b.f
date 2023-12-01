import React from 'react'
// Images
import Image1 from "../../images/blog/01.jpg";
import Image2 from "../../images/blog/02.jpg";
import Image3 from "../../images/blog/03.jpg";
import Image4 from "../../images/blog/04.jpg";
import Image5 from "../../images/blog/slider/01.jpg";
import Image6 from "../../images/blog/slider/02.jpg";
import Image7 from "../../images/blog/slider/03.jpg";
import BlogData from '../Others/BlogData';

const BlogSection = () => {
  return (
    <div class="blog padding--top padding--bottom bg-light">
      <div class="container">
        <div class="section__header text-center">
          <h2>Blogs</h2>
          <p>
            Proin Eget Tortor Risus. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit
          </p>
        </div>
        <div class="section__wrapper">
          <div class="row g-4">
            <div class="col-lg-12 col-12">
              <div class="blog__left">
                <div class="blog__area">
                  {BlogData.map((item, index) => (
                    <div className="blog__item">
                      <div className="blog__inner" key={index}>
                        <div className="blog__thumb">
                          <img src={item.thumbNail} alt="blog thumb" />
                        </div>
                        <div className="blog__content">
                          <a href="blog-single.html">
                            <h5>{item.title}</h5>
                          </a>
                          <ul className="blog__content-metapost">
                            <li>
                              <i className="far fa-calendar"></i> {item.time}
                            </li>
                            <li>
                              <i className="fas fa-user"></i> {item.Writer}
                            </li>
                            {/* You can modify and render other details as needed */}
                          </ul>
                          <p>{item.ThumbText}</p>
                          {/* Render paragraphs */}
                          {/* {item.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))} */}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div class="blog__item">
                    <div class="blog__inner">
                      <div class="blog__thumb">
                        <a href="blog-single.html">
                          <img src={Image2} alt="blog thumb" />
                        </a>
                      </div>
                      <div class="blog__content">
                        <a href="blog-single.html">
                          <h5>Quickly Develop Exceptional</h5>
                        </a>
                        <ul class="blog__content-metapost">
                          <li>
                            <i class="far fa-calendar"></i> 10 Jan 2022
                          </li>
                          <li>
                            <i class="fas fa-user">Writer: chizzy</i>{" "}
                          </li>
                          <li>
                            <i class="far fa-comments"></i> <a href="#">10</a>
                          </li>
                        </ul>
                        <p>
                          Revolutions of the bright points that first defined
                          him to me. And beneath the effulgent Antarctic skies I
                          have boarded the Argo-Navis, and joined the I have
                          boarded the Argo-Navis, and joined the
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div class="blog__item">
                    <div class="blog__inner">
                      <div class="blog__thumb">
                        <a href="blog-single.html">
                          <img src={Image3} alt="blog thumb" />
                        </a>
                      </div>
                      <div class="blog__content">
                        <a href="blog-single.html">
                          <h5>Why You Need This Theme?</h5>
                        </a>
                        <ul class="blog__content-metapost">
                          <li>
                            <i class="far fa-calendar"></i> 10 Jan 2022
                          </li>
                          <li>
                            <i class="fas fa-user"></i> Admin
                          </li>
                          <li>
                            <i class="far fa-comments"></i> <a href="#">10</a>
                          </li>
                        </ul>
                        <p>
                          Revolutions of the bright points that first defined
                          him to me. And beneath the effulgent Antarctic skies I
                          have boarded the Argo-Navis, and joined the I have
                          boarded the Argo-Navis, and joined the
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div class="blog__item">
                    <div class="blog__inner">
                      <div class="blog__thumb">
                        <a href="blog-single.html">
                          <img src={Image4} alt="blog thumb" />
                        </a>
                      </div>
                      <div class="blog__content">
                        <a href="blog-single.html">
                          <h5>What You Know About Life</h5>
                        </a>
                        <ul class="blog__content-metapost">
                          <li>
                            <i class="far fa-calendar"></i> 10 Jan 2022
                          </li>
                          <li>
                            <i class="fas fa-user"></i> Admin
                          </li>
                          <li>
                            <i class="far fa-comments"></i> <a href="#">10</a>
                          </li>
                        </ul>
                        <p>
                          Revolutions of the bright points that first defined
                          him to me. And beneath the effulgent Antarctic skies I
                          have boarded the Argo-Navis, and joined the I have
                          boarded the Argo-Navis, and joined the
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
    </div>
  );
}

export default BlogSection
