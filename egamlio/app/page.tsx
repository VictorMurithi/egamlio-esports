"use client"
import Banner from '@/components/home1/Banner';
import About from '@/components/home1/About';
import Features from '@/components/home1/Features';
import Games from '@/components/home1/Games';
import HowWorks from '@/components/home1/HowWorks';
import Community from '@/components/home1/Community';
import CallAction from '@/components/home1/CallAction';
import Faq from '@/components/home1/Faq';

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Features />
      <Games />
      <HowWorks />
      <Community />
      <CallAction />
      <Faq />
    </>
  )
}
