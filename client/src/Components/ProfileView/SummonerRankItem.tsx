import React from 'react';
import rankedEmblem from '../../Assets/ranked-emblems/Emblem_Platinum.png';

export default () => {
  return (
    <div className="item">
      <div className="ui image tiny">
        <img src={rankedEmblem} alt="rank emblem"></img>
      </div>
      <div className="content">
        <div className="extra">
          <span>Ranked Solo</span>
        </div>
        <div className="header">Gold IV</div>
        <div className="meta">
          <span>75 - 23</span>
          <span>/</span>
          <span>25% WR</span>
        </div>
      </div>
    </div>
  );
};
