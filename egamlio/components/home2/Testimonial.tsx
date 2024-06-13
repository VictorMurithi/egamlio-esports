"use client";
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
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
    };
    return (
        <section className="testomonial">
            <div className="overlay pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-text text-center">
                                <h5 className="sub-title">HEAR WHAT OUR PLAYERS HAVE TO SAY.</h5>
                                <h2 className="title">DON'T TAKE OUR WORD FOR IT</h2>
                                <p>Take your gaming skills to the next level in our Masterclass coaching</p>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative">
                        <div className="col-lg-12">
                            <Slider {...settings}
                                className="testimonials-carousel">
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="img-area">
                                            <img src="/images/testimonials-img.png" alt="image" />
                                        </div>
                                        <div className="info-area">
                                            <p className="xlr">‘’Egamlio is awesome! Had a great session with Saksham and got to learn a lot from a single workshop.’’</p>
                                            <div className="bottom d-flex align-items-center">
                                                <div className="img-area">
                                                    <img src="/images/icon/check.png" alt="image" />
                                                </div>
                                                <p>JAYLON SARIS</p>
                                                <span>FIFA Gamer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="img-area">
                                            <img src="/images/testimonials-img.png" alt="image" />
                                        </div>
                                        <div className="info-area">
                                            <p className="xlr">‘’Egamlio is awesome! Had a great session with Saksham and got to learn a lot from a single workshop.’’</p>
                                            <div className="bottom d-flex align-items-center">
                                                <div className="img-area">
                                                    <img src="/images/icon/check.png" alt="image" />
                                                </div>
                                                <p>JAYLON SARIS</p>
                                                <span>FIFA Gamer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="img-area">
                                            <img src="/images/testimonials-img.png" alt="image" />
                                        </div>
                                        <div className="info-area">
                                            <p className="xlr">‘’Egamlio is awesome! Had a great session with Saksham and got to learn a lot from a single workshop.’’</p>
                                            <div className="bottom d-flex align-items-center">
                                                <div className="img-area">
                                                    <img src="/images/icon/check.png" alt="image" />
                                                </div>
                                                <p>JAYLON SARIS</p>
                                                <span>FIFA Gamer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="img-area">
                                            <img src="/images/testimonials-img.png" alt="image" />
                                        </div>
                                        <div className="info-area">
                                            <p className="xlr">‘’Egamlio is awesome! Had a great session with Saksham and got to learn a lot from a single workshop.’’</p>
                                            <div className="bottom d-flex align-items-center">
                                                <div className="img-area">
                                                    <img src="/images/icon/check.png" alt="image" />
                                                </div>
                                                <p>JAYLON SARIS</p>
                                                <span>FIFA Gamer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="img-area">
                                            <img src="/images/testimonials-img.png" alt="image" />
                                        </div>
                                        <div className="info-area">
                                            <p className="xlr">‘’Egamlio is awesome! Had a great session with Saksham and got to learn a lot from a single workshop.’’</p>
                                            <div className="bottom d-flex align-items-center">
                                                <div className="img-area">
                                                    <img src="/images/icon/check.png" alt="image" />
                                                </div>
                                                <p>JAYLON SARIS</p>
                                                <span>FIFA Gamer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;