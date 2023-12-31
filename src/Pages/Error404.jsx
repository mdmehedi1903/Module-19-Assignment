// src/Error404.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { ExclamationTriangleFill } from 'react-bootstrap-icons';

const Error404 = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <ExclamationTriangleFill color="#dc3545" size={80} className="mb-3" />
          <h1 className="display-4">404</h1>
          <p className="lead">Oops! Page not found.</p>
          <Link to="/" className="btn btn-success">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
