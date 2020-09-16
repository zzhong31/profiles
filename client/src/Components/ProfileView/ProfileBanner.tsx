import React from 'react';

import GetWindowDimensions from '../../Helpers/GetWindowDimensions';
import { AccountMetadata } from '../../../../src/routes/BasicAccountInfo';
import FullSizeBanner from './FullSizeBanner';
import MobileBanner from './MobileBanner';

interface IProps {
  selectedProfile: AccountMetadata | null;
}

export default (props: IProps) => {
  const windowSize = GetWindowDimensions().width;

  return (
    <React.Fragment>
      {windowSize > 768 ? (
        <FullSizeBanner selectedProfile={props.selectedProfile} />
      ) : (
        <MobileBanner selectedProfile={props.selectedProfile} />
      )}
    </React.Fragment>
  );
};
