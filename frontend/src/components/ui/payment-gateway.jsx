import React from 'react';

const PaymentPortal = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: 'rzp_test_8Jj63xDO6x39On',
        amount: '78900',
        currency: 'INR',
        description: 'Acme Corp',
        image: 'https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg',
        prefill: {
          email: 'manvi@gmail.com',
          contact: '+919900000000',
        },
        config: {
          display: {
            blocks: {
              utib: {
                name: 'Pay using Axis Bank',
                instruments: [
                  { method: 'card', issuers: ['UTIB'] },
                  { method: 'netbanking', banks: ['UTIB'] },
                ],
              },
              other: {
                name: 'Other Payment modes',
                instruments: [
                  { method: 'card', issuers: ['ICIC'] },
                  { method: 'netbanking' },
                ],
              },
            },
            hide: [{ method: 'upi' }],
            sequence: ['block.utib', 'block.other'],
            preferences: {
              show_default_blocks: false,
            },
          },
        },
        handler(response) {
          alert(response.razorpay_payment_id);
        },
        modal: {
          ondismiss() {
            if (window.confirm('Are you sure, you want to close the form?')) {
              console.log('Checkout form closed by the user');
            } else {
              console.log('Complete the Payment');
            }
          },
        },
      };

      const rzp1 = new window.Razorpay(options);

      document.getElementById('rzp-button1').onclick = function (e) {
        rzp1.open();
        e.preventDefault();
      };
    };
  }, []);

  return (
    <div className="container text-center" style={{ color: '#ffffff', backgroundColor: '#1a1a1a', paddingTop: '50px' }}>
      <h1 className="mb-4">Payment Portal</h1>
      <button id="rzp-button1" className="btn btn-outline-dark btn-lg">
        <i className="fas fa-money-bill"></i> Own Checkout
      </button>
    </div>
  );
};

export default PaymentPortal;
