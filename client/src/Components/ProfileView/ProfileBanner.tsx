import React from 'react';

import championBanner from '../../Assets/img/champion/splash/Annie_12.jpg';
import { AccountMetadata } from '../../../../src/routes/BasicAccountInfo';

interface IProps {
  selectedProfile: AccountMetadata | null;
}

export default (props: IProps) => {
  const userAccount = props.selectedProfile;
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
                  <img
                    alt="profile icon"
                    src={`../Assets/profileicon/${userAccount?.profileIconId}.png`}
                  />
                </div>
                <div className="middle aligned content">
                  <div
                    className="header"
                    style={{ color: 'rgba(255,255,255,1' }}
                  >
                    <span>{userAccount?.name}</span>
                  </div>
                  <div
                    className="meta"
                    style={{ color: 'rgba(255,255,255,0.9' }}
                  >
                    <span>{`Level ${userAccount?.summonerLevel}`}</span>
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
