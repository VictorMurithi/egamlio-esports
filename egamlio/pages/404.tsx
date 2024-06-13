import Link from "next/link";

const error = () => {
    return (
        <>
            <head>
                <title>Egamlio - Esports and Gaming Courses Website NextJS Template</title>
            </head>
            <section className="error">
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="section-text">
                                    <h2 className="title">Oops! Something Wrong</h2>
                                    <p>We are sorry but the page you were looking for doesn't exist</p>
                                </div>
                                <Link href="/index-3" className="cmn-btn">Back To Home</Link>
                                <div className="img-area mt-60">
                                    <img src="/images/error-image.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default error;