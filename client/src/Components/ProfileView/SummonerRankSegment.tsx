import React from 'react';
import SummonerRankItem from './SummonerRankItem';

export default () => {
  return (
    <div className="ui segment">
      <div className="ui divided items">
        <SummonerRankItem />
        <SummonerRankItem />
      </div>
    </div>
  );
};
