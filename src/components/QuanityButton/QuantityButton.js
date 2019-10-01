/* eslint-disable react/prop-types */

import React, { useState, useCallback } from 'react';
import useDebouncedCallback from 'use-debounce/lib/useDebouncedCallback';
import clsx from 'clsx';

import styles from './QuantityButton.css';

export default function(props) {
  const {
    defaultValue = 1,
    numberOfButton = 3,
    min = 1,
    max = 10,
    term = 1,
  } = props;
  // todo error message

  const [value, setValue] = useState(defaultValue);
  const [isCustom, setCustomStatus] = useState(false);

  const [debouncedFunction] = useDebouncedCallback(value => {
    setValue(value);
    props.onSelect && props.onSelect(Number(value));
  }, 300);

  const onClick = x =>
    useCallback(() => {
      setValue(x);
      props.onSelect && props.onSelect(Number(x));
    }, [x]);

  const range = [...Array(max).keys()].map(x => (x *= term));

  const remainingQuantity = range.slice(numberOfButton, max);
  const rangeDisplayed = range
    .filter(x => x >= min && x <= max)
    .splice(0, numberOfButton);

  const lastValue = rangeDisplayed[rangeDisplayed.length - 1];

  const onClickCustom = useCallback(() => {
    // set the last value as default
    props.onSelect && props.onSelect(Number(lastValue));

    setCustomStatus(true);
  }, []);

  const singleButtons = rangeDisplayed.map(x => {
    return (
      <button
        key={x}
        className={clsx(
          styles.quantityButton,
          x === value ? styles.selected : styles.default
        )}
        onClick={onClick(x)}
      >
        {x}
      </button>
    );
  });

  return (
    <div className="jb-quantity-buttons">
      {!isCustom && singleButtons}
      {!isCustom && remainingQuantity[0] < max && remainingQuantity.length && (
        <button
          className={clsx(styles.quantityButton, styles.default)}
          onClick={onClickCustom}
        >
          {`${lastValue}+`}
        </button>
      )}

      {isCustom && (
        <input
          type="number"
          defaultValue={lastValue}
          min={min}
          max={max}
          onChange={e => debouncedFunction(Number(e.target.value))}
        />
      )}
    </div>
  );
}
