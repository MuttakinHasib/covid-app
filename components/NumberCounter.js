import React from 'react';
import NumberFormat from 'react-number-format';
import AppText from '../constants/AppText';

const NumberCounter = ({value}) => {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      thousandsGroupStyle={'lakh'}
      renderText={(val) => <AppText>{val ? val : 0}</AppText>}
    />
  );
};

export default NumberCounter;
