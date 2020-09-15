import React from 'react';
import SearchBar from './SearchBar';

export default () => {
  return (
    <div style={{ paddingTop: '12vh' }}>
      <h1 className="ui header center aligned">Profiles.gg</h1>
      <div style={{ marginTop: '10px' }}>
        <SearchBar />
      </div>
    </div>
  );
};
