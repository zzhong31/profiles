import React, { useEffect, useState } from 'react';
import MainSearchContainer from './MainSearchContainer';
import ProfileMain from './ProfileView/ProfileMain';

interface IProps {
  handleFormSubmit: any;
  userName: string | null;
}

export default (props: IProps) => {
  const { userName } = props;
  const [showSearch, setShowSearch] = useState(true);

  useEffect(() => {
    if (userName) {
      setShowSearch(false);
    }
  }, [userName]);

  return (
    <div
      className='ui main container'
      style={{ paddingTop: showSearch ? '96px' : '84px' }}
    >
      <div className='ui container' style={{ paddingBottom: '112px' }}>
        {showSearch ? (
          <MainSearchContainer handleFormSubmit={props.handleFormSubmit} />
        ) : (
          <ProfileMain
            currentUserName={userName}
            handleFormSubmit={props.handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
};
