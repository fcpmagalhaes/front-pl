import {useState, useEffect} from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  Checkbox,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    width: '100%',
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const MultipleSelect = ({ item, refinedFilters, setRefinedFilters  }) => {
  const classes = useStyles();

  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    const newRefined = refinedFilters.map(filter => {
      if (filter.value === item.value) {
        filter.options = selected;
      }
      return filter;
    });
    setRefinedFilters(newRefined);
  },[selected])

  return (
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">{item.label}</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={selected}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => {
            const name = selected.map(s => s.label);
            return name.join(', ')
          }}
          MenuProps={MenuProps}
        >
          {item.options.map((item) => (
            <MenuItem key={item.value} value={item}>
              <Checkbox checked={selected.indexOf(item) > -1} />
              <ListItemText primary={item.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

export default MultipleSelect;
