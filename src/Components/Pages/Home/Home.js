import React from 'react';
import AboutSection from '../../AboutSection/AboutSection';
import Banner from '../../Banner/Banner';
import NewsSubscription from '../../NewsSubscription/NewsSubscription';
import Testimonial from '../../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutSection></AboutSection>
           <Testimonial></Testimonial>
           <NewsSubscription></NewsSubscription>
        </div>
    );
};

export default Home;