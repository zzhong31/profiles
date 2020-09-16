import React from 'react';
import championIcon from '../../Assets/10.18.1/img/champion/Aphelios.png';

export default () => {
  return (
    <div className="item">
      <div className="ui tiny image">
        <img src={championIcon} alt="champion"></img>
      </div>
      <div className="middle aligned content">
        <div className="header">Match 1</div>
        <div className="description">
          <p></p>
        </div>
      </div>
    </div>
  );
};
