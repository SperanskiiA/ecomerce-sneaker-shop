import React from 'react';
import Link from 'next/link';

const canceled = () => {
  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <div>
          <h3>Ooops...</h3>
          <h3>Something went wrong, huh?</h3>
          <p>Lets try another one time? Would you like to continue shopping?</p>
        </div>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default canceled;
