import React, { useState } from 'react';
import { Dropdown, DropdownProps } from 'semantic-ui-react';

interface SearchBarOption {
  key: string;
  value: string;
  text: string;
}

const recentlySearched: SearchBarOption[] = [];

interface IProps {
  handleFormSubmit: any;
}

export default (props: IProps) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [searchOptions, setSearchOptions] = useState(recentlySearched);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedValue) {
      props.handleFormSubmit(selectedValue);
    }
    setSelectedValue('');
  };

  const onChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    const { value } = data;
    if (typeof value === 'string') {
      props.handleFormSubmit(value);
    }
  };

  const handleAddition = (
    event: React.KeyboardEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    let optionToAdd: SearchBarOption;
    if (typeof data.value === 'string' && data.value !== '') {
      optionToAdd = {
        key: data.value,
        value: data.value,
        text: data.value
      };
      setSearchOptions([optionToAdd, ...searchOptions]);
    }
  };

  const noResultsMessage: string = 'No matches';
  return (
    <form className="ui form" name="mainSummonerSearch" onSubmit={submitForm}>
      <Dropdown
        placeholder="Search for a summoner..."
        fluid
        search
        selection
        onChange={onChange}
        header="Recently Searched"
        options={searchOptions}
        noResultsMessage={noResultsMessage}
        value={selectedValue}
        allowAdditions
        onAddItem={handleAddition}
        additionLabel="Search for: "
      />
    </form>
  );
};
