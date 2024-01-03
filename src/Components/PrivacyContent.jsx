import React from 'react';

const PrivacyContent = (props) => {
    return (
        <>
            <div className="container mt-5">
<div className="row">
  <div className="col-md-8 offset-md-2">
    <h2 className="text-center mb-4">{props.title}</h2>

    <p>
      Welcome to Freelancer Mehedi. We are committed to protecting your
      privacy and ensuring you have a positive experience on our website and when using our products and services.
    </p>

    <h4>1. Information We Collect</h4>
    <p>
      We collect information you provide directly to us, such as when you create an account, submit a contact
      form, or interact with our Services. This information may include your name, email address, and any other
      information you choose to provide.
    </p>

    <h4>2. How We Use Your Information</h4>
    <p>
      We may use the information we collect for various purposes, including to provide and improve our Services,
      communicate with you, analyze usage patterns, and personalize content.
    </p>

    <h4>3. Information Sharing</h4>
    <p>
      We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not
      include trusted third parties who assist us in operating our website, conducting our business, or serving
      you, as long as those parties agree to keep this information confidential.
    </p>

    <h4>4. Security</h4>
    <p>
      We take reasonable measures to help protect your personal information from loss, theft, misuse, and
      unauthorized access, disclosure, alteration, and destruction.
    </p>

    <h4>5. Changes to This Privacy Policy</h4>
    <p>
      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
      Privacy Policy on this page.
    </p>

    <p>
      For more information about our privacy practices, please contact us at [contact@email.com].
    </p>
  </div>
</div>
</div>
        </>
    );
};

export default PrivacyContent;