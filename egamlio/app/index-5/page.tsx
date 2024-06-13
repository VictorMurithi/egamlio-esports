import CallAction from '@/components/home1/CallAction';
import Testimonial from '@/components/home2/Testimonial';
import Banner from '@/components/home5/Banner';
import ChooseUs from '@/components/home5/ChooseUs';
import Community from '@/components/home5/Community';
import Faq from '@/components/home5/Faq';
import GamesSlider from '@/components/home5/GameSlider';
import HowWork from '@/components/home5/HowWork';
import React from 'react';

const page = () => {
    return (
        <>
            <Banner />
            <HowWork />
            <ChooseUs />
            <div className='pb-5'>
                <GamesSlider />
            </div>
            <CallAction />
            <Community />
            <Faq />
            <div className='pt-120'>
                <Testimonial />
            </div>
        </>
    );
};

export default page;