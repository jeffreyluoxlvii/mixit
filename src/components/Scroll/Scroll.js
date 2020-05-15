import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', textAlign: 'center', height: '80vh', width: '80vw'}}>
      {props.children}
    </div>
  );
};

export default Scroll;