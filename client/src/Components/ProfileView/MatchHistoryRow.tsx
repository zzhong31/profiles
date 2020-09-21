import React from 'react';

interface IProps {
  match: any;
  champions: any;
  queues: any;
}

export default (props: IProps) => {
  const champions = props.champions.default;
  const queues = props.queues.default;
  const championsArray = Object.values(champions.data);

  const matchChamp: any = championsArray.find(
    (record: any) => record.key === props.match.champion.toString()
  );
  const matchQueue: any = queues.find(
    (record: any) => record.queueId === props.match.queue
  );

  let matchDate = new Date(props.match.timestamp);

  let extractedMatchDate = `${matchDate.getFullYear()}-${matchDate.getMonth()}-${matchDate.getDate()}`;

  return (
    <div className='item'>
      <div className='ui tiny image'>
        <img
          src={`../Assets/champion/${matchChamp.name.replace(' ', '')}.png`}
          alt='champion'
        ></img>
      </div>
      <div className='middle aligned content'>
        <div className='header'>{matchQueue.description}</div>
        <div className='meta'>
          <span>{extractedMatchDate}</span>
        </div>
      </div>
    </div>
  );
};
