import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        <h4>
          Let's travel{' '}
          <span
            className="emoji"
            role="img"
            aria-label="plane"
            aria-hidden="false"
          >
            🌎
          </span>{' '}
          the world.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
