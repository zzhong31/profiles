import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchHistoryRow from './MatchHistoryRow';
import { AccountMetadata } from '../../../../src/routes/BasicAccountInfo';
import * as champions from '../../Helpers/champion.json';
import * as queues from '../../Helpers/queues.json';

interface IProps {
  selectedRankInfo: [];
  selectedProfile: AccountMetadata | null;
}

export default (props: IProps) => {
  const [beginIndex, setBeginIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  const [matchHistory, setMatchHistory] = useState<any>([]);

  useEffect(() => {
    const getMatchInfo = async () => {
      const result = await axios.get(
        `/api/account/basicinfo/matchhistory/na1/${props.selectedProfile?.accountId}/10/0`
      );
      if (props.selectedProfile) {
        setMatchHistory(result.data.matches);
      }
    };

    getMatchInfo();
  }, [props.selectedProfile]);

  const renderMatches = () => {
    return matchHistory.map((match: any) => {
      return (
        <MatchHistoryRow
          key={match.gameId}
          match={match}
          champions={champions}
          queues={queues}
        />
      );
    });
  };
  return (
    <div className='ui segment' style={{ minHeight: '80px' }}>
      {matchHistory.length > 0 ? (
        <div className='ui divided unstackable items'>{renderMatches()}</div>
      ) : (
        <div className='ui active inverted dimmer'>
          <div className='ui text loader'>Loading</div>
        </div>
      )}
    </div>
  );
};
