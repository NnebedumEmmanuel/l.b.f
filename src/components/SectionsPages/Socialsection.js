import React from 'react'

const Socialsection = () => {
  return (
    <div class="social">
      <div class="container">
        <div class="social__area">
          <ul class="social__list">
            <li class="social__list-facebook">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
                <span>facebook</span>
              </a>
            </li>
            <li class="social__list-twitter">
              <a href="#">
                <i class="fab fa-twitter"></i>
                <span>twitter</span>
              </a>
            </li>
            <li class="social__list-linkedin">
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
                <span>linkedin</span>
              </a>
            </li>
            <li class="social__list-instagram">
              <a href="#">
                <i class="fab fa-instagram"></i>
                <span>instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Socialsection
