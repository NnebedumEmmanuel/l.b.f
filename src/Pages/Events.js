import React from 'react'
import HeaderForm from '../components/Others/HeaderForm';
import HeaderCart from '../components/Others/HeaderCart';
import PageHeader from '../components/SectionsPages/PageHeader';
import EventPage from '../components/LandingPages/EventPage';
import Socialsection from '../components/SectionsPages/Socialsection';

const Events = () => {
  return (
    <div>
      {/* Header Search */}
      <HeaderForm />

      <div class="overlay"></div>
      {/* Header Cart */}
      <HeaderCart />

      {/* hwader in root*/}

      <PageHeader page="Events" />

      <EventPage />
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

export default Events
