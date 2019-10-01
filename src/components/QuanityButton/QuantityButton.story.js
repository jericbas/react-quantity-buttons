// @flow

import * as React from 'react';

import QuantityButton from './QuantityButton';

export default { title: 'QuantityButton' };

export const defaultButton = () => <QuantityButton />;
export const withDefaultValue3 = () => <QuantityButton defaultValue={3} />;
export const withMax10And5Buttons = () => (
  <QuantityButton max={10} numberOfButton={5} />
);

export const withMax10And5ButtonsAnd2Term = () => (
  <QuantityButton max={10} numberOfButton={5} term={2} />
);

export const withMax10And5ButtonsOnSelect = () => (
  <QuantityButton max={10} numberOfButton={5} onSelect={console.log} />
);
// need to fix
export const withMax10And5ButtonsOnSelectDefaultValue6 = () => (
  <QuantityButton
    max={10}
    numberOfButton={5}
    onSelect={console.log}
    defaultValue={6}
  />
);
