import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container mx-auto mt-6 text-center'>
      <h1 className='text-xl'>
        Error. Requested information could not be found
      </h1>
      <Link className='text-emerald-500 hover:text-emerald-600' to='/'>
        Back
      </Link>
    </div>
  );
};

export default NotFound;
