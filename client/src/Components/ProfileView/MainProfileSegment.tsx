import React from 'react';

import SummonerRankSegment from './SummonerRankSegment';
import MatchHistorySegment from './MatchHistorySegment';

export default () => {
  return (
    <div className="ui stackable two column centered grid">
      <div className="row">
        <div className="four wide column">
          <SummonerRankSegment />
        </div>
        <div className="twelve wide column">
          <MatchHistorySegment />
        </div>
      </div>
    </div>
  );
};
