import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useAuth from '../components/hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(email, password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Head>
                <title>Egamlio - Esports and Gaming Courses Website NextJS Template</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            </Head>
            <section className="login-reg">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="top-area pt-4 mb-30">
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
                        <div className="row pt-120 d-flex justify-content-center">
                            <div className="col-lg-6">
                                <div className="login-reg-main text-center">
                                    <div className="form-area">
                                        <div className="section-text">
                                            <h4>Welcome Back!</h4>
                                            <p>We're so excited to see you again! Log In to your Egamlio Account!</p>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="single-input">
                                                        <label htmlFor="email">Email Address</label>
                                                        <div className="input-box">
                                                            <input
                                                                type="text"
                                                                id="email"
                                                                placeholder="Enter Your Email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="single-input">
                                                        <label htmlFor="passInput">Password</label>
                                                        <div className="input-box">
                                                            <input
                                                                type={showPassword ? 'text' : 'password'}
                                                                id="passInput"
                                                                placeholder="Enter Your Password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                            <img
                                                                className="showPass"
                                                                src="/images/icon/show-hide.png"
                                                                alt="icon"
                                                                onClick={togglePasswordVisibility}
                                                                style={{ cursor: 'pointer' }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="remember-me">
                                                        <label className="checkbox-single d-flex align-items-center">
                                                            <span className="left-area">
                                                                <span className="checkbox-area d-flex">
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark"></span>
                                                                </span>
                                                                <span className="item-title d-flex align-items-center">
                                                                    <span>Remember Me</span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                        <Link href="#">Forgot Password</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="cmn-btn mt-40 w-100" type="submit">Login</button>
                                        </form>
                                        <div className="reg-with">
                                            <div className="or">
                                                <p>OR</p>
                                            </div>
                                            <div className="social">
                                                <ul className="footer-link d-flex justify-content-center align-items-center">
                                                    <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link href="#"><i className="fab fa-google"></i></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitch"></i></Link></li>
                                                    <li><Link href="#"><i className="fab fa-apple"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="account mt-30">
                                        <p>Don't have an account? <Link href="register">Sign Up Here</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
