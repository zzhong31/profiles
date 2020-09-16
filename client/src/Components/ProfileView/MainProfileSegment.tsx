import React from 'react';

import SummonerRankSegment from './SummonerRankSegment';
import MatchHistorySegment from './MatchHistorySegment';

interface IProps {
  selectedRankInfo: [];
}

export default (props: IProps) => {
  const { selectedRankInfo } = props;

  return (
    <div className="ui stackable two column centered grid">
      <div className="row">
        <div className="four wide column">
          <SummonerRankSegment selectedRankInfo={selectedRankInfo} />
        </div>
        <div className="twelve wide column">
          <MatchHistorySegment />
        </div>
      </div>
    </div>
  );
};
