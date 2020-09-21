import React from 'react';

interface IProps {
  match: any;
  champions: any;
}

export default (props: IProps) => {
  console.log(props.champions);
  const championsArray = Object.values(props.champions.data);

  const matchChamp: any = championsArray.find(
    (record: any) => record.key === props.match.champion.toString()
  );
  console.log(matchChamp.name);
  return (
    <div className='item'>
      <div className='ui tiny image'>
        <img
          src={`../Assets/champion/${matchChamp.name.replace(' ', '')}.png`}
          alt='champion'
        ></img>
      </div>
      <div className='middle aligned content'>
        <div className='header'>Match 1</div>
        <div className='description'>
          <p></p>
        </div>
      </div>
    </div>
  );
};
