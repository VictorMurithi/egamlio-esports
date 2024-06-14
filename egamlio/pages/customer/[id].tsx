import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Swal from 'sweetalert2';
import useAuth from '../../components/hooks/useAuth';
import { useRouter } from 'next/router';

interface Customer {
  customer_id: string;
  first_name: string;
  other_names: string;
  gender: string;
  number: string;
  email: string;
  description: string;
}

const CustomerProfilePage = () => {
  const { user } = useAuth();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchCustomerDetails(id as string);
    }
  }, [id]);

  const fetchCustomerDetails = async (customerId: string) => {
    try {
      const response = await fetch(`https://stemprotocol.codefremics.com/api/v2/customers/get-customer-details/${customerId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCustomer(data.response);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Fetch Customer Details',
          text: 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      console.error('Error fetching customer details:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Fetch Customer Details',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{`${customer.first_name} ${customer.other_names} - Customer Profile`}</title>
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
      <section className="customer-profile-page">
        <div className="overlay pb-120">
          <div className="container">
            <div className="row pt-120 d-flex justify-content-center">
              <div className="col-lg-8">
                <h4 className="text-center mb-3">Customer Profile</h4>
                <div className="profile-details">
                  <p><strong>First Name:</strong> {customer.first_name}</p>
                  <p><strong>Other Names:</strong> {customer.other_names}</p>
                  <p><strong>Gender:</strong> {customer.gender}</p>
                  <p><strong>Mobile Number:</strong> {customer.number}</p>
                  <p><strong>Email:</strong> {customer.email}</p>
                  <p><strong>Description:</strong> {customer.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerProfilePage;
