// src/Error404.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Error404 = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="display-4">404</h1>
          <p className="lead">Oops! Page not found.</p>
          <a href="/" className="btn btn-primary">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default Error404;
