
import React, { useState } from 'react'

import Header from "../../components/layout/Header";
import Hero from "../../components/layout/Hero";
import Advantages from "../../components/layout/Advantages";
import Testimonials from "../../components/layout/Testimonials";
import About from "../../components/layout/About";
import Footer from '../../components/layout/Footer';
import FrequentTrip from "../../components/layout/FrequentTrip";
import MyChatBot from "../../components/ui/MyChatbot"

import reviews from "./data";

function index() {

  return (
    <div>
      <Header
        showPublishButton={true}
        />
      <Hero />
      <MyChatBot />
      {/* <MyChatBot /> */}
      <Advantages />
      <FrequentTrip />
      <Testimonials />
      <About />
      <Footer />

    </div> 

  );
}

export default index
