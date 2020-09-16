import React from 'react';

interface RankInfo {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

interface IProps {
  queueToDisplay: string;
  rankInfo: RankInfo | any;
}

export default (props: IProps) => {
  let isUnranked = true;
  let tier = 'Iron';

  let winPercentage = 0;

  if (Object.keys(props.rankInfo).length > 0) {
    const origRank = props.rankInfo.tier!;
    tier =
      origRank.charAt(0) +
      origRank.substr(1, origRank.length - 1).toLowerCase();

    winPercentage = Math.round(
      (props.rankInfo.wins / (props.rankInfo.wins + props.rankInfo.losses)) *
        100
    );
    isUnranked = false;
  }

  return (
    <div className="item">
      <div className="ui image tiny">
        <img
          src={`../Assets/ranked-emblems/Emblem_${tier}.png`}
          alt="rank emblem"
        ></img>
      </div>
      <div className="content">
        <div className="extra">
          <span>{props.queueToDisplay}</span>
        </div>
        {isUnranked ? (
          <div className="header">Unranked</div>
        ) : (
          <React.Fragment>
            <div className="meta">
              <span>{`${tier} ${props.rankInfo.rank}`}</span>
            </div>
            <div className="meta">
              <span>{`${props.rankInfo.wins} - ${props.rankInfo.losses}`}</span>
            </div>
            <div className="meta">
              <span>{`${winPercentage}% WR`}</span>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
