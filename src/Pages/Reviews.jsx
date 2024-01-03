// src/ReviewPage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarFill } from 'react-bootstrap-icons';
import PageTitle from '../Components/PageTitle';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    comment: 'Excellent product! Highly recommended.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    comment: 'Good service and fast delivery.',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    rating: 3,
    comment: 'Average experience. Could be better.',
  },
];

const ReviewPage = () => {
  return (
    <>  <PageTitle title="What Customer Says About Our Product!"/>
            <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-4">Customer Reviews</h2>
          {reviews.map((review) => (
            <div key={review.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <div className="mb-2">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <StarFill key={index} color="#ffc107" size={18} className="mr-1" />
                  ))}
                </div>
                <p className="card-text">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ReviewPage;
