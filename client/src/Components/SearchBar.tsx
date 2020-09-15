import React from 'react';
import { Dropdown } from 'semantic-ui-react';

interface SearchBarOption {
  key: string;
  value: string;
  text: string;
}

const recentlySearched: SearchBarOption[] = [
  {
    key: 'undyingfire',
    value: 'undyingfire',
    text: 'undyingfire'
  },
  {
    key: 'seip',
    value: 'seip',
    text: 'seip'
  },
  {
    key: 'fermatahyde',
    value: 'fermatahyde',
    text: 'fermatahyde'
  }
];

export default () => {
  const noResultsMessage: string = 'No matches';
  return (
    <form className="ui form" name="mainSummonerSearch">
      <Dropdown
        placeholder="Search for a summoner..."
        fluid
        search
        selection
        header="Recently Searched"
        options={recentlySearched}
        noResultsMessage={noResultsMessage}
      />
    </form>
  );
};
