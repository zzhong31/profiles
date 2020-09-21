import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProfileBanner from './ProfileBanner';
import MatchHistorySegment from './MainProfileSegment';
import SearchBar from '../SearchBar';
import { AccountMetadata } from '../../../../src/routes/BasicAccountInfo';

interface IProps {
  currentUserName: string | null;
  handleFormSubmit: any;
}

export default (props: IProps) => {
  const [stillLoading, setStillLoading] = useState(true);
  const [invalidSearch, setInvalidSearch] = useState(false);
  const [
    selectedUserInfo,
    setSelectedUserInfo
  ] = useState<AccountMetadata | null>(null);
  const [rankInfo, setRankInfo] = useState<[]>([]);

  const { currentUserName } = props;

  useEffect(() => {
    setStillLoading(true);

    const getProfileDetails = async (realm: string, userName: string) => {
      let userInfo: any;
      try {
        userInfo = await axios.get(
          `/api/account/basicinfo/${realm}/${userName}`
        );
      } catch (err) {
        setInvalidSearch(true);
        return null;
      }

      const dataToSend: AccountMetadata = userInfo.data[0];

      setInvalidSearch(false);

      setSelectedUserInfo(dataToSend);
      setRankInfo(userInfo.data[1]);
      setStillLoading(false);
    };

    if (currentUserName) {
      getProfileDetails('na1', currentUserName);
    }
  }, [currentUserName]);
  return (
    <div className='ui segment' style={{ minHeight: '80px' }}>
      {invalidSearch ? (
        <React.Fragment>
          <div className='ui header center aligned'>
            Summoner not found, please check your spelling
          </div>
          <div style={{ marginTop: '10px' }}>
            <SearchBar handleFormSubmit={props.handleFormSubmit} />
          </div>
        </React.Fragment>
      ) : stillLoading ? (
        <div className='ui active inverted dimmer'>
          <div className='ui text loader'>Loading</div>
        </div>
      ) : (
        <React.Fragment>
          <ProfileBanner selectedProfile={selectedUserInfo} />
          <MatchHistorySegment
            selectedRankInfo={rankInfo}
            selectedProfile={selectedUserInfo}
          />
        </React.Fragment>
      )}
    </div>
  );
};
