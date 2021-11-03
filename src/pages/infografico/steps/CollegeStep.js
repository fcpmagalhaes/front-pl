import {useState, useEffect} from 'react';
import MultipleSelect from '../../../components/MultipleSelect';
import InputValue from '../../../components/InputValue';
import {
  Box,
  Grid,
  List,
  ListItem,
  Button,
  Divider,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { collegeOptionsMock } from '../../../mock/filters';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from '../../../store/infographic/actions';

const useStyles = makeStyles((theme) => ({
  listFilters: {
    paddingTop: 6,
    paddingBottom: 6,
    
  },
  instructionText: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '80px',
    marginLeft: '0px',
    border: '2px dotted #1A5FC8',
    width: '100%'
  },
  filterButton: {
    textAlign: 'left',
    fontSize: '12px',
  },
  navigationButton: {
    paddingLeft: '30px',
    paddingRight: '30px',
  },
}));


function CollegeStep() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { rangeYears, collegeNames, loading } = useSelector((state) => {
    return state.infographic;
  });

  const [collegeFilters, setCollegeFilters] = useState([]);
  const [refinedFilters, setRefinedFilters] = useState([]);
  const [collegeNamesOptions, setCollegeNamesOptions] = useState([]);

  useEffect(() => {
    dispatch(Creators.loadCollege(rangeYears));
  }, []);

  useEffect(() => {
    if (collegeNames.length !== 0) {
      setCollegeNamesOptions([
        {
          value: 1, label: 'Nome do Curso', type: 'select',
          options: collegeNames
        }
      ])
    }
  }, [collegeNames]);

  useEffect(() => {
    if (refinedFilters.length !== 0) {
      dispatch(Creators.setCollegeFilters(refinedFilters));
    }
  }, [refinedFilters]);

  function showIcon(item) {
    if (verifyFilterSelected(item)) {
      return (<><RemoveCircleOutlineIcon style={{ marginLeft: '10px' }} /></>);
    }
    return (<><AddCircleOutlineIcon style={{ marginLeft: '10px' }}/></>);
  }

  function addRemoveFilter(item) {
    const isIncuded = collegeFilters.some(filter => filter.value === item.value);
    if (isIncuded) {
      const newFilter = collegeFilters.filter(e => e.value !== item.value);
      setCollegeFilters(newFilter);
      setRefinedFilters(newFilter);
    } else {
      setCollegeFilters([...collegeFilters, item]);
      if(item.options) {
        const {options, ...rest} = item;
        setRefinedFilters([...refinedFilters, rest]);
      } else {
        setRefinedFilters([...refinedFilters, item]);
      }
    }
  }

  function verifyFilterSelected(item) {
    return collegeFilters.some(filter => filter.value === item.value);
  }

  function refineFilters() {
    return (
      <Grid container spacing={4}>
        {
          collegeFilters.map((item) => {
            if (item.type === 'select') {
              return (
                <Grid item xs={12} md={6}>
                  <MultipleSelect item={item} refinedFilters={refinedFilters} setRefinedFilters={setRefinedFilters}/>
                </Grid>
              )
            } else if (item.type === 'check') {
              return (
                <Grid item xs={12} md={6} style={{ pointerEvents: 'none' }}>
                  <FormControlLabel
                    control={<Checkbox checked name={item.label} />}
                    label={item.label}
                  />
                </Grid>
              )
            } else if (item.type === 'input') {
              return (
                <Grid item xs={12} md={6}>
                  <InputValue item={item} refinedFilters={refinedFilters} setRefinedFilters={setRefinedFilters}/>
                </Grid>
              )
            }
          })
        }
      </Grid>
    );
  }

  function listButtons(item) {
    return (
      <ListItem
        classes={{ root: classes.listFilters }}
        key={item.value}                        
      >
        <Button
          color="primary"
          variant={verifyFilterSelected(item) ? "outlined" : "contained"}
          onClick={() => addRemoveFilter(item)}
          classes={{ root: classes.filterButton }}
        >
          {item.label}
          {showIcon(item)}
        </Button>
      </ListItem>
    )
  }

  return (
    <Grid container>
      <Grid item md={3} style={{ padding: 20 }}>
        <List height="100%" width="100%" display="flex">
          {collegeOptionsMock.map((item) => {
            return (
              listButtons(item)
            );
          })}
          {collegeNamesOptions.map((item) => {
            return (
              listButtons(item)
            );
          })}
        </List>
      </Grid>
        
      <Grid item md={1}>
        <Divider orientation="vertical"/>
      </Grid>

      <Grid item md={8} style={{ paddingRight: 36 }}>
        <Typography variant="h6" gutterBottom>
          Curso
        </Typography>
        {collegeFilters.length !== 0 ?
          refineFilters()
          :
          <Box className={classes.instructionText}>
            <Typography variant="subtitle2" >
              Seus filtros selecionados serão exibidos e refinados aqui.
            </Typography>
            <Typography variant="subtitle1" >
              Caso nenhuma opção seja selecionada, os filtros referentes aos Cursos serão desconsiderados.
            </Typography>
          </Box>
        }
      </Grid>
    </Grid>
  )
}

export default CollegeStep;