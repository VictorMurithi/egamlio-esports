import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import useAuth from '../components/hooks/useAuth';

const Home = () => {
    const { user, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/home'); 
        }
    }, [user, router]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>Home - Egamlio</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            </Head>
            <header className="top-area pt-4 mb-30">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-5 col">
                            <Link className="back-home" href="/">
                                <img src="/images/icon/left-icon.png" alt="image" />
                                Back To Egamlio
                            </Link>
                        </div>
                        <div className="col-sm-2 text-center col">
                            <Link href="/index-3">
                                <img src="/images/logo.png" alt="image" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <section className="home-page">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="row pt-120 d-flex justify-content-center">
                            <div className="col-lg-6">
                                <div className="home-main text-center">
                                    <div className="section-text">
                                        <h4>Welcome, {user.firstName} {user.lastName}!</h4>
                                        <p>We're so excited to have you here!</p>
                                    </div>
                                    <button className='cmn-btn mt-40 w-100' onClick={() => router.push('/customers')}> Add Customers</button>
                                    <button className="cmn-btn mt-40 w-100" onClick={() => router.push('/customer-list')}> Customer List</button>
                                    <button className="cmn-btn mt-40 w-100" onClick={logout}>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
