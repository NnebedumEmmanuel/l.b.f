import React from 'react'
import PreLoader from "../components/Others/PreLoader";
import HeaderForm from "../components/Others/HeaderForm";
import HeaderCart from "../components/Others/HeaderCart";
import Banner from "../components/SectionsPages/Banner";
import EventTime from "../components/SectionsPages/EventTime";
import EventSection from "../components/SectionsPages/EventSection";
import ScheduleSection from "../components/SectionsPages/ScheduleSection";
import SermonSection from '../components/SectionsPages/SermonSection';
import Cause from "../components/SectionsPages/Cause";

import GallerySection from "../components/SectionsPages/GallerySection";
import AboutSection from "../components/SectionsPages/AboutSection";
import BlogSection from '../components/SectionsPages/BlogSection';
import QuoteSection from '../components/SectionsPages/QuoteSection';
import SponsorSection from '../components/SectionsPages/SponsorSection';

const Home = () => {
  return (
    <>
      {/* main secion */}

      {/* preloader start here */}
      <PreLoader />

      {/* Header Search */}
      <HeaderForm />

      <div class="overlay"></div>
      {/* Header Cart */}
      <HeaderCart />

      {/* header section  */}
      

      {/*  Banner section start here  */}
      <Banner/>


      {/* < Event Time section start here  */}
      <EventTime/>


      {/* <!-- ================> About section start here <================== --> */}
      <AboutSection/>
     

      {/* <!-- ================> gallery section start here <================== --> */}
      <GallerySection/>

      {/* <!-- ================> Event section start here <================== --> */}
      <EventSection/>

      {/* <!-- ================> Shedule section start here <================== --> */}
      <ScheduleSection/>

      {/* <!-- ================> Sermon section start here <================== --> */}
      <SermonSection/>

      {/* <!-- ================> Cause section start here <================== --> */}
      <Cause/>

      {/* <!-- ================> Blog section start here <================== --> */}
      <BlogSection/>
        

      {/* <!-- ================> Qoute section start here <================== --> */}
      <QuoteSection/>

      {/* <!-- ================> Sponsor section start here <================== --> */}
      <SponsorSection/>

      {/* <!-- ================> Contact section start here <================== --> */}

      {/* <!-- ================> Location section start here <================== --> */}

      {/* <!-- ================> Social section start here <================== --> */}

      {/* fOOTER SECTION */}
    </>
  );
}

export default Home
