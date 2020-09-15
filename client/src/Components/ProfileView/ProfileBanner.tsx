import React from 'react';

import championBanner from '../../Assets/img/champion/splash/Annie_12.jpg';
import profileImage from '../../Assets/10.18.1/img/profileicon/537.png';

export default () => {
  return (
    <div className="ui one column centered grid">
      <div className="row">
        <div className="column">
          <div
            className="ui segment"
            style={{
              backgroundImage: `url(${championBanner})`,
              backgroundPosition: 'center bottom'
            }}
          >
            <div className="ui items">
              <div className="item">
                <div
                  className="ui tiny image"
                  style={{ border: '1px solid white' }}
                >
                  <img alt="profile icon" src={profileImage} />
                </div>
                <div className="middle aligned content">
                  <div
                    className="header"
                    style={{ color: 'rgba(255,255,255,1' }}
                  >
                    <span>UndyingFire</span>
                  </div>
                  <div
                    className="meta"
                    style={{ color: 'rgba(255,255,255,0.9' }}
                  >
                    <span>Level 157</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
