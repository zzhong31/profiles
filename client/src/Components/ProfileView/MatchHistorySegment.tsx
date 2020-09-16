import React from 'react';
import MatchHistoryRow from './MatchHistoryRow';

export default () => {
  return (
    <div className="ui segment">
      <div className="ui divided unstackable items">
        <MatchHistoryRow />
        <MatchHistoryRow />
        <MatchHistoryRow />
        <MatchHistoryRow />
        <MatchHistoryRow />
      </div>
    </div>
  );
};
