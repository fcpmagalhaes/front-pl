
import {useState, useEffect} from 'react';
import {
  InputLabel,
  Input,
  InputAdornment,
} from '@material-ui/core';

const InputValue = ({ item, refinedFilters, setRefinedFilters  }) => {
  const [amount, setAmount] = useState([]);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    const newRefined = refinedFilters.map(filter => {
      if (filter.value === item.value) {
        filter.amount = amount;
      }
      return filter;
    });
    setRefinedFilters(newRefined);
  },[amount]);

  return (
    <>
      <InputLabel htmlFor="standard-adornment-amount">{item.label}</InputLabel>
      <Input
        id="standard-adornment-amount"
        value={amount}
        onChange={handleChange}
        // startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        type="number"
      />
    </>
  );
}

export default InputValue;