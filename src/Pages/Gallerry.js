import React from 'react'
import HeaderCart from '../components/Others/HeaderCart';
import Socialsection from '../components/SectionsPages/Socialsection';
import HeaderForm from '../components/Others/HeaderForm';
import PageHeader from '../components/SectionsPages/PageHeader';
import GalleryPage from '../components/LandingPages/GalleryPage';
import ScrollToTop from '../components/Others/ScrollToTop';

const Gallerry = () => {
  return (
    <div>
      <ScrollToTop />
      {/* Header Search */}
      <HeaderForm />

      <div class="overlay"></div>
      {/* Header Cart */}
      <HeaderCart />

      {/* header in root*/}

      <PageHeader page="Gallery" title="Gallery" />
      <GalleryPage />
      <Socialsection />

      {/* <!-- scrollToTop start here --> */}
      <a href="#" class="scrollToTop">
        <i class="fas fa-arrow-up"></i>
        <span class="pluse_1"></span>
        <span class="pluse_2"></span>
      </a>
    </div>
  );
}

export default Gallerry
