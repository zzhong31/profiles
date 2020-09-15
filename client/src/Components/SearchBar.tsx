import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const recentlySearched: object[] = [
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
