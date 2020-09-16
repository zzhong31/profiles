import React from 'react';
import SummonerRankItem from './SummonerRankItem';
import GetWindowDimensions from '../../Helpers/GetWindowDimensions';

interface IProps {
  selectedRankInfo: any[];
}
export default (props: IProps) => {
  const { selectedRankInfo } = props;

  const windowDimension = GetWindowDimensions().width;

  const checkForQueueType = (queue: string) => {
    let queueToDisplay: string = '';
    if (queue === 'RANKED_SOLO_5x5') {
      queueToDisplay = 'Ranked Solo';
    }
    if (queue === 'RANKED_FLEX_SR') {
      queueToDisplay = 'Ranked Flex';
    }
    if (selectedRankInfo.length > 0) {
      let matchFound = false;
      let whichIndex = 0;
      selectedRankInfo.forEach((val, index) => {
        if (val.queueType === queue) {
          matchFound = true;
          whichIndex = index;
        }
      });
      if (matchFound) {
        return (
          <SummonerRankItem
            queueToDisplay={queueToDisplay}
            rankInfo={selectedRankInfo[whichIndex]}
          />
        );
      }
    } else {
      return <SummonerRankItem queueToDisplay={queueToDisplay} rankInfo={{}} />;
    }
  };

  return (
    <div className="ui segment">
      {windowDimension > 768 ? (
        <div className="ui divided items">
          {checkForQueueType('RANKED_SOLO_5x5')}
          {checkForQueueType('RANKED_FLEX_SR')}
        </div>
      ) : (
        <div className="ui two column grid">
          <div className="two column row">
            <div className="column">{checkForQueueType('RANKED_SOLO_5x5')}</div>
            <div className="column">{checkForQueueType('RANKED_FLEX_SR')}</div>
          </div>
        </div>
      )}
    </div>
  );
};
