import React, { useState } from 'react';
import TopMenu from './TopMenu';
import MainContent from './MainContent';
import Footer from './Footer';

export default () => {
  const urlParams = new URLSearchParams(window.location.search);
  const initialUserName = urlParams.get('userName');

  const [userName, setUserName] = useState(initialUserName);
  const searchValueChanged = (value: string) => {
    setUserName(value);
    window.history.pushState({}, '', `?userName=${value}`);
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'rgba(136,240,240,0.5)'
      }}
    >
      <TopMenu handleFormSubmit={searchValueChanged} />
      <MainContent handleFormSubmit={searchValueChanged} userName={userName} />
      <Footer />
    </div>
  );
};
