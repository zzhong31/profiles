import React from 'react';
import SearchBar from './SearchBar';

interface IProps {
  handleFormSubmit: any;
}

export default (props: IProps) => {
  return (
    <div className="ui fixed menu inverted" id="topOfPage">
      <div className="ui container">
        <div className="ui grid" style={{ width: '100%' }}>
          <div className="two column row">
            <div className="left floated ten wide column">
              <a className="header item" href="./">
                Profiles.gg
              </a>
            </div>
            <div className="right floated six wide column">
              <SearchBar handleFormSubmit={props.handleFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
