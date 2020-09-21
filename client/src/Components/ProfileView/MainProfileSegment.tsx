import React from 'react';

import SummonerRankSegment from './SummonerRankSegment';
import MatchHistorySegment from './MatchHistorySegment';
import { AccountMetadata } from '../../../../src/routes/BasicAccountInfo';

interface IProps {
  selectedRankInfo: [];
  selectedProfile: AccountMetadata | null;
}

export default (props: IProps) => {
  const { selectedRankInfo, selectedProfile } = props;

  return (
    <div className='ui stackable two column centered grid'>
      <div className='row'>
        <div className='four wide column'>
          <SummonerRankSegment selectedRankInfo={selectedRankInfo} />
        </div>
        <div className='twelve wide column'>
          <MatchHistorySegment
            selectedRankInfo={selectedRankInfo}
            selectedProfile={selectedProfile}
          />
        </div>
      </div>
    </div>
  );
};
