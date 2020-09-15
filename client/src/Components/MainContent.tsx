import React, { useEffect, useState } from 'react';
import MainSearchContainer from './MainSearchContainer';
import ProfileMain from './ProfileView/ProfileMain';

export default () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get('userName');

  const [showSearch, setShowSearch] = useState(true);

  useEffect(() => {
    if (userName) {
      setShowSearch(false);
    }
  }, [userName]);
  return (
    <div className="ui main container" style={{ paddingTop: '112px' }}>
      <div className="ui container" style={{ paddingBottom: '112px' }}>
        {showSearch ? (
          <MainSearchContainer />
        ) : (
          <ProfileMain currentUserName={userName} />
        )}
      </div>
    </div>
  );
};
