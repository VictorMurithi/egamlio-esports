import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Swal from 'sweetalert2';
import useAuth from '../components/hooks/useAuth';

const CreateCustomerForm = () => {
  const { user } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    first_name: '',
    other_names: '',
    gender: '',
    mobile_number: '',
    email: '',
    description: '',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://stemprotocol.codefremics.com/api/v2/customers/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        Swal.fire({
          icon: 'success',
          title: 'Customer Created',
          text: data.description || 'Customer profile created successfully!',
        });
        // Clear form after successful submission
        setFormData({
          first_name: '',
          other_names: '',
          gender: '',
          mobile_number: '',
          email: '',
          description: '',
        });
      } else {
        const data = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Failed to Create Customer',
          text: data.message || 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      console.error('Error creating customer:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Create Customer',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <>
      <Head>
        <title>Create Customer - Egamlio</title>
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
      <section className="create-customer-page">
        <div className="overlay pb-120">
          <div className="container">
            <div className="row pt-120 d-flex justify-content-center">
              <div className="col-lg-6">
                <form onSubmit={handleSubmit} className="create-customer-form">
                  <h4 className="text-center mb-3">Create New Customer</h4>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Other Names"
                      name="other_names"
                      value={formData.other_names}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <select
                      className="form-control"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                      name="mobile_number"
                      value={formData.mobile_number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="cmn-btn mt-40 w-100">
                      Create Customer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateCustomerForm;
