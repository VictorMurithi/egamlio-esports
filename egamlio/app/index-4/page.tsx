import CallAction from '@/components/home1/CallAction';
import Faq from '@/components/home1/Faq';
import Testimonial from '@/components/home2/Testimonial';
import TopCoaches from '@/components/home2/TopCoaches';
import Counter from '@/components/home4/Counter';
import Banner from '@/components/home4/Banner';
import ChooseUs from '@/components/home4/ChooseUs';
import ExploreCoach from '@/components/home4/ExploreCoach';
import HowWork from '@/components/home4/HowWork';
import React from 'react';

const page = () => {
    return (
        <>
            <Banner />
            <ExploreCoach />
            <HowWork />
            <ChooseUs />
            <Counter />
            <TopCoaches />
            <Faq />
            <CallAction />
            <Testimonial />
        </>
    );
};

export default page;