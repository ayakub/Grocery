import React from 'react';

const Drowpdown2 = ({ className, children, togolref }) => {
    return (
        <div className={className} ref={togolref}>
        {children}
      </div>
  
    );
};

export default Drowpdown2;