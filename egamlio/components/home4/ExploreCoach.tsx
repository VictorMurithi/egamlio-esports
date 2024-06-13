"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";

const ExploreCoach = () => {
    return (
        <section className="explore-coaches">
            <div className="overlay pt-120 pb-12h0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <h5 className="sub-title">IMPROVE WITH COURSES & COACHES</h5>
                                <h2 className="title">Explore our Coaches</h2>
                                <p>Find Coaches of your eSports game</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                slidesPerView={"auto"}
                                centeredSlides={true}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                  }}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                                modules={[EffectCoverflow, Pagination, Navigation]}
                                className="coachSwiper"
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}

                            >
                                <SwiperSlide>
                                    <img src="/images/card-game-1.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/images/card-game-2.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/images/card-game-3.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/images/card-game-4.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/images/card-game-5.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/images/card-game-6.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/images/card-game-3.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/images/card-game-5.png" alt="image" />
                                </SwiperSlide>
                                <div className="">
                                    <div className="swiper-pagination mt-4"></div>
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ExploreCoach;