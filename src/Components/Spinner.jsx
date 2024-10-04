import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader'; // Ensure correct import

const Spinner = ({ loading }) => {
  const override = {
    display: 'block',
    margin: '0 auto', // Center horizontally
    position: 'absolute', // Center the spinner vertically
    top: '50%', // Adjust to vertical center
    left: '50%',
    transform: 'translate(-50%, -50%)', // Ensure perfect centering
  };

  return (
    <PulseLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override} 
      size={20} // Make the spinner smaller
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;

