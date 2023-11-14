import React from 'react'
import HeaderForm from '../components/Others/HeaderForm';
import HeaderCart from '../components/Others/HeaderCart';
import PageHeader from '../components/SectionsPages/PageHeader';
import BlogPage from '../components/LandingPages/BlogPage';
import Socialsection from '../components/SectionsPages/Socialsection';
import ScrollToTop from '../components/Others/ScrollToTop';

const Causes = () => {
  return (
    <div>
      <ScrollToTop />
      {/* Header Search */}
      <HeaderForm />

      <div class="overlay"></div>
      {/* Header Cart */}
      <HeaderCart />

      {/* header in root*/}

      <PageHeader page="Blog" />
      <BlogPage />
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

export default Causes
