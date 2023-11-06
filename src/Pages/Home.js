import React from 'react'
import PreLoader from "../components/PreLoader";
import HeaderForm from '../components/HeaderForm';
import HeaderCart from '../components/HeaderCart';
import Banner from '../components/Banner';
import EventTime from '../components/EventTime';
import EventSection from '../components/EventSection';
import ScheduleSection from '../components/ScheduleSection';
import SermonSection from '../components/SermonSection';
import Cause from '../Cause';
import { About } from './About';
import GallerySection from '../components/GallerySection';

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
        

      {/* <!-- ================> Qoute section start here <================== --> */}

      {/* <!-- ================> Sponsor section start here <================== --> */}

      {/* <!-- ================> Contact section start here <================== --> */}

      {/* <!-- ================> Location section start here <================== --> */}

      {/* <!-- ================> Social section start here <================== --> */}

      {/* fOOTER SECTION */}
    </>
  );
}

export default Home
