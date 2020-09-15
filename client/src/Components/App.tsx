import React from 'react';
import TopMenu from './TopMenu';
import MainContent from './MainContent';
import Footer from './Footer';

export default () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh'
      }}
    >
      <TopMenu />
      <MainContent />
      <Footer />
    </div>
  );
};
