import React from 'react';

import { AccountMetadata } from '../../../../src/routes/BasicAccountInfo';

interface IProps {
  selectedProfile: AccountMetadata | null;
}

export default (props: IProps) => {
  const userAccount = props.selectedProfile;

  return (
    <div className="ui segment">
      <div className="ui unstackable items">
        <div className="item">
          <div className="ui tiny image" style={{ border: '1px solid white' }}>
            <img
              alt="profile icon"
              src={`https://leagueassets-zz.s3.us-east-2.amazonaws.com/Assets/profileicon/${userAccount?.profileIconId}.png`}
            />
          </div>
          <div className="content">
            <span className="header">{userAccount?.name}</span>
            <div className="meta">
              <span>{`Level ${userAccount?.summonerLevel}`}</span>
            </div>
          </div>
        </div>
        <div className="two column row">
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  );
};
