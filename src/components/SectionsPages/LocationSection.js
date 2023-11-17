import React from 'react'

import Image1 from "../../images/about/pst chizzy.jpg";

const LocationSection = () => {
  return (
    <div class="location">
      <div class="container-fluid">
        <div class="row g-0">
          <div class="col-lg-6 col-12">
            <div class="location__left">
              <div class="location__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355669374!2d-118.69192993092697!3d34.02073049448939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1633958856057!5m2!1sen!2sbd"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="location__right padding--top padding--bottom">
              <div class="location__info">
                <div class="location__info-top">
                  <div class="section__header">
                    <h2>Contact Person</h2>
                  </div>
                  <div class="section__wrapper">
                    <div class="location__info-thumb">
                      <img
                        // className="w-25 p-3 rounded-circle"
                        style={{ width: "100px" }}
                        src={Image1}
                        alt="location thumb"
                      />
                    </div>
                    <div class="location__info-content">
                      <h6>Pastor Chizzy</h6>
                      <span>Church Pastor</span>
                      <ul>
                        <li>
                          <b>Tel:</b>+ 234 813 839 7603
                        </li>
                        <li>
                          <b>Email:</b>info@pstchizzy.com
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="location__info-bottom">
                  <div class="section__header">
                    <h2>Contact Info</h2>
                  </div>
                  <div class="section__wrapper">
                    <div class="location__info-list">
                      <ul>
                        <li>
                          <div class="location__info-left">
                            <i class="fas fa-map-marker-alt"></i>
                          </div>
                          <div class="location__info-right">
                            <p>
                              Federal University of Technology Owerri (Beside
                              FUTO Foods OLD SEETHEAD), Owerri, Nigeria
                            </p>
                          </div>
                        </li>
                        <li>
                          <div class="location__info-left">
                            <i class="far fa-clock"></i>
                          </div>
                          <div class="location__info-right">
                            <ul>
                              {/* <li>
                                <b>Monday-Thursday :</b> 06:00 am - 09:00 pm
                              </li> */}
                              <li>
                                <b>wednesday :</b> 4:30 pm - 07:00 pm
                              </li>
                              <li>
                                <b>Saturday :</b> 05:30 am - 07:30 pm
                              </li>
                              <li>
                                <b>Sunday :</b> Closed
                              </li>
                            </ul>
                          </div>
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
    </div>
  );
}

export default LocationSection
