"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const path = usePathname() 
    return (
        <>
            <section className="banner-section inner-banner coach dashboard">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2>User Dashboard</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="index">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">User Dashboard</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dashboard-section">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-3 col-lg-4 col-md-8">
                                <div className="sidebar-single">
                                    <div className="profile-img">
                                        <img src="/images/author-profile-4.png" alt="icon" />
                                    </div>
                                    <h5>Willis Myers</h5>
                                    <Link href="#" className="cmn-btn alt">Logout</Link>
                                </div>
                                <div className="sidebar-single">
                                    <ul>
                                        <li>
                                            <Link href="/dashboard" className={`${path === '/dashboard' && 'active'}`}>
                                                <img src="/images/icon/dashboard-menu-1.png" className="max-un" alt="icon" />
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/orders" className={`${path === '/dashboard/orders' && 'active'}`}>
                                                <img src="/images/icon/dashboard-menu-2.png" className="max-un" alt="icon" />
                                                My orders
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/personal-info" className={`${path === '/dashboard/personal-info' && 'active'}`}>
                                                <img src="/images/icon/dashboard-menu-3.png" className="max-un" alt="icon" />
                                                Personal Information
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/invoices" className={`${path === '/dashboard/invoices' && 'active'}`}>
                                                <img src="/images/icon/dashboard-menu-4.png" className="max-un" alt="icon" />
                                                My Invoices
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/payment" className={`${path === '/dashboard/payment' && 'active'}`}>
                                                <img src="/images/icon/dashboard-menu-2.png" className="max-un" alt="icon" />
                                                Payment method
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard/password" className={`${path === '/dashboard/password' && 'active'}`}>
                                                <img src="/images/icon/dashboard-menu-6.png" className="max-un" alt="icon" />
                                                Change password
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar-single">
                                    <div className="profile-img">
                                        <img src="/images/icon/help-icon.png" alt="icon" />
                                    </div>
                                    <h5>Do you need help</h5>
                                    <p>Just let us know how we can help you and we will try to find a solution as soon as possible.</p>
                                    <Link href="contact" className="cmn-btn mt-4">Chat with Us</Link>
                                </div>
                            </div>
                            <div className="col-xxl-9 col-lg-8 cus-mar">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}