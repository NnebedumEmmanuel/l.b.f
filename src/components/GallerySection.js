import React from 'react'
import Image1 from "../images/gallery/01.jpg";
import Image2 from "../images/gallery/02.jpg";

const GallerySection = () => {
  return (
    <div class="gallery padding--top padding--bottom bg-light">
      <div class="container-fluid">
        <div class="section__header text-center">
          <h2>Cristian Fastivals</h2>
        </div>
        <div class="section__wrapper">
          <div class="gallery__filter">
            <ul>
              <li data-filter="*" class="active">
                All
              </li>
              <li data-filter=".cate-1">Christmas</li>
              <li data-filter=".cate-2">Corpus Christi</li>
              <li data-filter=".cate-3">Holy Innocents</li>
              <li data-filter=".cate-4">Lammas</li>
            </ul>
          </div>
          <div class="row g-3 grid">
            <div class="col-lg-4 col-sm-6 col-12 cate-1">
              <div class="gallery__item">
                <div class="gallery__inner">
                  <div class="gallery__thumb">
                    <img
                      src={Image1}
                      alt="gallery-thumb"
                      class="w-100"
                    />
                  </div>
                  <div class="gallery__content text-center">
                    <a
                      href="assets/images/gallery/01.jpg"
                      data-rel="lightcase"
                      class="gallery__icon"
                    >
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 cate-2">
              <div class="gallery__item">
                <div class="gallery__inner">
                  <div class="gallery__thumb">
                    <img
                      src={Image2}
                      alt="gallery-thumb"
                      class="w-100"
                    />
                  </div>
                  <div class="gallery__content text-center">
                    <a
                      href="assets/images/gallery/02.jpg"
                      data-rel="lightcase"
                      class="gallery__icon"
                    >
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 cate-3">
              <div class="gallery__item">
                <div class="gallery__inner">
                  <div class="gallery__thumb">
                    <img
                      src="assets/images/gallery/03.jpg"
                      alt="gallery-thumb"
                      class="w-100"
                    />
                  </div>
                  <div class="gallery__content text-center">
                    <a
                      href="assets/images/gallery/03.jpg"
                      data-rel="lightcase"
                      class="gallery__icon"
                    >
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 cate-4 cate-1">
              <div class="gallery__item">
                <div class="gallery__inner">
                  <div class="gallery__thumb">
                    <img
                      src="assets/images/gallery/04.jpg"
                      alt="gallery-thumb"
                      class="w-100"
                    />
                  </div>
                  <div class="gallery__content text-center">
                    <a
                      href="assets/images/gallery/04.jpg"
                      data-rel="lightcase"
                      class="gallery__icon"
                    >
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 cate-3">
              <div class="gallery__item">
                <div class="gallery__inner">
                  <div class="gallery__thumb">
                    <img
                      src="assets/images/gallery/05.jpg"
                      alt="gallery-thumb"
                      class="w-100"
                    />
                  </div>
                  <div class="gallery__content text-center">
                    <a
                      href="assets/images/gallery/05.jpg"
                      data-rel="lightcase"
                      class="gallery__icon"
                    >
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 cate-2 cate-4">
              <div class="gallery__item">
                <div class="gallery__inner">
                  <div class="gallery__thumb">
                    <img
                      src="assets/images/gallery/06.jpg"
                      alt="gallery-thumb"
                      class="w-100"
                    />
                  </div>
                  <div class="gallery__content text-center">
                    <a
                      href="assets/images/gallery/06.jpg"
                      data-rel="lightcase"
                      class="gallery__icon"
                    >
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 cate-1 cate-3">
              <div class="gallery__item">
                <div class="gallery__inner">
                  <div class="gallery__thumb">
                    <img
                      src="assets/images/gallery/07.jpg"
                      alt="gallery-thumb"
                      class="w-100"
                    />
                  </div>
                  <div class="gallery__content text-center">
                    <a
                      href="assets/images/gallery/07.jpg"
                      data-rel="lightcase"
                      class="gallery__icon"
                    >
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 cate-2">
              <div class="gallery__item">
                <div class="gallery__inner">
                  <div class="gallery__thumb">
                    <img
                      src="assets/images/gallery/08.jpg"
                      alt="gallery-thumb"
                      class="w-100"
                    />
                  </div>
                  <div class="gallery__content text-center">
                    <a
                      href="assets/images/gallery/08.jpg"
                      data-rel="lightcase"
                      class="gallery__icon"
                    >
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12 cate-1">
              <div class="gallery__item">
                <div class="gallery__inner">
                  <div class="gallery__thumb">
                    <img
                      src="assets/images/gallery/09.jpg"
                      alt="gallery-thumb"
                      class="w-100"
                    />
                  </div>
                  <div class="gallery__content text-center">
                    <a
                      href="assets/images/gallery/09.jpg"
                      data-rel="lightcase"
                      class="gallery__icon"
                    >
                      <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-5">
            <a href="#" class="default-btn move-right">
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection
