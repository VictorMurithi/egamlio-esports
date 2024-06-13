import Faq from '@/components/home1/Faq';
import Testimonial from '@/components/home2/Testimonial';
import Banner from '@/components/home3/Banner';
import CallToAction from '@/components/home3/CallToAction';
import Community from '@/components/home3/Community';
import Counter from '@/components/home3/Counter';
import Features from '@/components/home3/Features';
import GamesSlider from '@/components/home3/GamesSlider';
import HowWork from '@/components/home3/HowWork';

const page = () => {
    return (
        <>
            <Banner />
            <GamesSlider />
            <Features />
            <Counter />
            <CallToAction />
            <HowWork />
            <Community />
            <Faq />
            <Testimonial />
        </>
    );
};

export default page;