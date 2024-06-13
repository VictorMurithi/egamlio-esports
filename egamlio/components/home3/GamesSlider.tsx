"use client";
import Link from 'next/link';
import Slider from "react-slick";
const Prev = ({ onClick }: any) => {
    return (
        <button onClick={onClick} className="prev d-flex align-items-center justify-content-center"><i className="fas fa-chevron-right"></i></button>
    )
}
const Next = ({ onClick }: any) => {
    return (
        <button onClick={onClick} className="next d-flex align-items-center justify-content-center"><i className="fas fa-chevron-right"></i></button>
    )
}
const GamesSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <Prev />,
        nextArrow: <Next />,
        dotsClass: 'section-dots',
        customPaging: function () {
            return (
              <button className="dot" type="button" title="">
                <span className="string"></span>
              </button>
            );
          },
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 676,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    };

    return (
        <section className="games carousel">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <h5 className="sub-title">IMPROVE WITH COURSES & COACHES</h5>
                                <h2 className="title">SUPPORTED GAMES</h2>
                                <p>Egamlio is a platform dedicated to helping players get better at the video games and esports they love most</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Slider {...settings} className="testimonials-carousel">
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="single-item">
                                            <div className="thumb">
                                                <img src="/images/games-img-1.png" className="w-100" alt="icon" />
                                                <span className="mdr">3 Coaches</span>
                                            </div>
                                            <div className="text-area">
                                                <h5>Fortnite</h5>
                                                <div className="footer d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <div className="star-area">
                                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                                            <Link href="#"><i className="fas fa-star-half-alt"></i></Link>
                                                        </div>
                                                        <p className="mdr">
                                                            <span>240</span>
                                                            <span>VOTES</span>
                                                        </p>
                                                    </div>
                                                    <p className="mdr">$20</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="single-item">
                                            <div className="thumb">
                                                <img src="/images/games-img-2.png" className="w-100" alt="icon" />
                                                <span className="mdr">3 Coaches</span>
                                            </div>
                                            <div className="text-area">
                                                <h5>Rainbow Six</h5>
                                                <div className="footer d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <div className="star-area">
                                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                                            <Link href="#"><i className="fas fa-star-half-alt"></i></Link>
                                                        </div>
                                                        <p className="mdr">
                                                            <span>240</span>
                                                            <span>VOTES</span>
                                                        </p>
                                                    </div>
                                                    <p className="mdr">$20</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="single-item">
                                            <div className="thumb">
                                                <img src="/images/games-img-1.png" className="w-100" alt="icon" />
                                                <span className="mdr">3 Coaches</span>
                                            </div>
                                            <div className="text-area">
                                                <h5>Fortnite</h5>
                                                <div className="footer d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <div className="star-area">
                                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                                            <Link href="#"><i className="fas fa-star-half-alt"></i></Link>
                                                        </div>
                                                        <p className="mdr">
                                                            <span>240</span>
                                                            <span>VOTES</span>
                                                        </p>
                                                    </div>
                                                    <p className="mdr">$20</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single-item">
                                        <div className="thumb">
                                            <img src="/images/games-img-3.png" className="w-100" alt="icon" />
                                            <span className="mdr">3 Coaches</span>
                                        </div>
                                        <div className="text-area">
                                            <h5>league of legends</h5>
                                            <div className="footer d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <div className="star-area">
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star-half-alt"></i></Link>
                                                    </div>
                                                    <p className="mdr">
                                                        <span>240</span>
                                                        <span>VOTES</span>
                                                    </p>
                                                </div>
                                                <p className="mdr">$20</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div className="paginate"></div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GamesSlider;