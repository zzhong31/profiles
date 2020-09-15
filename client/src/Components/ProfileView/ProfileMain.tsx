import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProfileBanner from './ProfileBanner';
import MatchHistorySegment from './MainProfileSegment';

//http://localhost:5000/api/account/basicinfo/na1/seip

interface IProps {
  currentUserName: string | null;
}

export default (props: IProps) => {
  const [stillLoading, setStillLoading] = useState(true);
  const [invalidSearch, setInvalidSearch] = useState(false);

  const { currentUserName } = props;

  useEffect(() => {
    console.log(currentUserName);

    const getProfileDetails = async (realm: string, userName: string) => {
      let userInfo: object;
      try {
        userInfo = await axios.get(
          `http://localhost:5000/api/account/basicinfo/${realm}/${userName}`
        );
      } catch (err) {
        setInvalidSearch(true);
        return null;
      }
      setStillLoading(false);
      console.log(userInfo);
    };

    if (currentUserName) {
      getProfileDetails('na1', currentUserName);
    }
  }, [currentUserName]);
  return (
    <div className="ui segment" style={{ minHeight: '80px' }}>
      {invalidSearch ? (
        <div className="ui header center aligned">
          Summoner not found, please check your spelling
        </div>
      ) : stillLoading ? (
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      ) : (
        <React.Fragment>
          <ProfileBanner />
          <MatchHistorySegment />
        </React.Fragment>
      )}
    </div>
  );
};
