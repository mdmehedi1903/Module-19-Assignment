import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { CheckCircleFill } from 'react-bootstrap-icons';

const ThankYou = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <CheckCircleFill color="#28a745" size={80} className="mb-3" />
          <h1 className="display-4">Thank You!</h1>
          <p className="lead">Your order has been received successfully.</p>
          <Link to="/" className="btn btn-success">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
