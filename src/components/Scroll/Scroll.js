import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', textAlign: 'center', height: '90vh', width: '90vw'}}>
      {props.children}
    </div>
  );
};

export default Scroll;