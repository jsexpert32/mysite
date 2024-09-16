import React from 'react';
import AboutMe from './sections/AboutMe/AboutMe';
import HomeSection from './sections/Home/Home';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

const Home = props => (
  <React.Fragment>
    <HomeSection />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
  </React.Fragment>
);

export default Home;
