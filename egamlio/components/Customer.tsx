import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Swal from 'sweetalert2';
import useAuth from '../components/hooks/useAuth';

interface Customer {
  customer_id: string;
  first_name: string;
  other_names: string;
  gender: string;
  number: string;
  email: string;
  description: string;
}

const CustomerList = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch customers from API
  const fetchCustomers = async () => {
    try {
      const response = await fetch('https://stemprotocol.codefremics.com/api/v2/customers/get-merchant-customers/1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCustomers(data.response);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Fetch Customers',
          text: 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      console.error('Error fetching customers:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Fetch Customers',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter(customer => {
    return (
      customer.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.other_names.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.number.includes(searchTerm)
    );
  });

  const handleRowClick = (customer_id: string) => {
    router.push(`/customer/${customer_id}`);
  };

  return (
    <>
      <Head>
        <title>Customer List - Egamlio</title>
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
      <section className="customer-list-page">
        <div className="overlay pb-120">
          <div className="container">
            <div className="row pt-120 d-flex justify-content-center">
              <div className="col-lg-8">
                <h4 className="text-center mb-3">Customer List</h4>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Search by First Name, Other Names, Mobile Number, or Email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="table-responsive">
                  <table className="table table-striped table-bordered bg-white">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Other Names</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCustomers.length > 0 ? (
                        filteredCustomers.map((customer) => (
                          <tr key={customer.customer_id} onClick={() => handleRowClick(customer.customer_id)}>
                            <td>{customer.first_name}</td>
                            <td>{customer.other_names}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.number}</td>
                            <td>{customer.email}</td>
                            <td>{customer.description}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="text-center">No customers found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerList;
