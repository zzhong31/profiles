import React from 'react';

export default () => {
  return (
    <div
      className="ui inverted vertical footer segment"
      style={{
        marginTop: '70px',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingTop: '7px'
      }}
    >
      <div className="ui center aligned container">
        <div className="ui centered mini">Zhenyu Zhong | 2020</div>
        <div
          className="ui horizontal inverted small divided link list"
          style={{ marginTop: '7px' }}
        >
          <a className="item" href="#topOfPage">
            Home
          </a>
          <a
            className="item"
            href="https://www.linkedin.com/in/zhenyu-zhong-32a46358/"
          >
            Contact
          </a>
          <a className="item" href="https://github.com/zzhong31">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
