import React from 'react';

export default () => {
  return (
    <div
      className="ui inverted vertical footer segment"
      style={{
        marginTop: '70px',
        position: 'absolute',
        bottom: 0,
        width: '100%'
      }}
    >
      <div className="ui center aligned container">
        <div className="ui horizontal inverted small divided link list">
          <a className="item" href="./">
            About
          </a>
          <a className="item" href="./">
            Contact
          </a>
          <a className="item" href="./">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
