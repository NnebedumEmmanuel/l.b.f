import React from 'react'
import image1 from "../../images/about/pst chizzy.jpg";

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
                Good Day, my beloved congregation. I am Pastor Chizzy, and I am
                committed to shepherding this community with love, faith, and a
                heart devoted to the teachings of our Lord.
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
                  Welcome to Love Bound Family Federal University of Technology
                  Owerri, "An Oasis of Love, We Love the Devil Out of You." Our
                  church stands as a vibrant community dedicated to glorifying
                  God, fostering deep love within our community, and adhering to
                  the teachings of the Bible.
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
                        At Love Bound Family, our primary goal is to glorify God
                        in everything we do. Through our worship, service, and
                        daily lives, we seek to honor and magnify His name. We
                        believe that by living in alignment with His will, we
                        can bring glory to Him and reflect His love to the world
                        around us.
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
                        Love is at the core of our identity. We strive to create
                        an inclusive and compassionate community where
                        individuals from all walks of life feel welcomed,
                        accepted, and loved. Our commitment to loving our
                        community extends beyond the walls of our church. We
                        actively engage in outreach programs, support
                        initiatives, and various community projects to spread
                        love and make a positive impact.
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
                        At Love Bound Family, the Bible is our compass. Its
                        teachings guide our beliefs and actions, shaping our
                        relationships, decisions, and understanding of God's
                        will for our lives. We honor the authority and truth
                        within its pages, allowing it to lead us in our journey
                        of faith.
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
