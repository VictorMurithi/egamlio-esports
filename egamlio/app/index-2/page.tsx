import CallAction from '@/components/home1/CallAction';
import Features from '@/components/home1/Features';
import Games from '@/components/home1/Games';
import Banner from '@/components/home2/Banner';
import Counter from '@/components/home2/Counter';
import Explore from '@/components/home2/Explore';
import MasterClass from '@/components/home2/MasterClass';
import Howwork from '@/components/home2/Howwork';
import Community from '@/components/home1/Community';
import TopCoaches from '@/components/home2/TopCoaches';
import Testimonial from '@/components/home2/Testimonial';

const page = () => {
    return (
        <>
            <Banner />
            <Explore />
            <MasterClass />
            <Games />
            <Counter />
            <CallAction />
            <Features />
            <Howwork />
            <Community />
            <TopCoaches />
            <Testimonial />
        </>
    );
};

export default page;