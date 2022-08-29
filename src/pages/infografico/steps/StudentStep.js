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

function StudentStep() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { studentOptions, loading } = useSelector((state) => {
    return state.infographic;
  });

  const [studentFilters, setStudentFilters] = useState([]);
  const [refinedFilters, setRefinedFilters] = useState([]);

  useEffect(() => {
    dispatch(Creators.loadStudent());
  }, []);

  useEffect(() => {
    if (refinedFilters.length !== 0) {
      dispatch(Creators.setStudentFilters(refinedFilters));
    }
  }, [refinedFilters]);

  function showIcon(item) {
    if (verifyFilterSelected(item)) {
      return (<><RemoveCircleOutlineIcon style={{ marginLeft: '10px' }} /></>);
    }
    return (<><AddCircleOutlineIcon style={{ marginLeft: '10px' }}/></>);
  }

  function addRemoveFilter(item) {
    const isIncuded = studentFilters.some(filter => filter.value === item.value);
    if (isIncuded) {
      const newFilter = studentFilters.filter(e => e.value !== item.value);
      setStudentFilters(newFilter);
      setRefinedFilters(newFilter);
    } else {
      setStudentFilters([...studentFilters, item]);
      if(item.options) {
        const {options, ...rest} = item;
        setRefinedFilters([...refinedFilters, rest]);
      } else {
        setRefinedFilters([...refinedFilters, item]);
      }
    }
  }

  function verifyFilterSelected(item) {
    return studentFilters.some(filter => filter.value === item.value);
  }

  function refineFilters() {
    return (
      <Grid container spacing={4}>
        {
          studentFilters.map((item, index) => {
            if (item.type === 'select') {
              return (
                <Grid item xs={12} md={6} key={index}>
                  <MultipleSelect item={item} refinedFilters={refinedFilters} setRefinedFilters={setRefinedFilters}/>
                </Grid>
              )
            } else if (item.type === 'check') {
              return (
                <Grid item xs={12} md={6} style={{ pointerEvents: 'none' }} key={index}>
                  <FormControlLabel
                    control={<Checkbox checked name={item.label} />}
                    label={item.label}
                  />
                </Grid>
              )
            } else if (item.type === 'input') {
              return (
                <Grid item xs={12} md={6} key={index}>
                  <InputValue item={item} refinedFilters={refinedFilters} setRefinedFilters={setRefinedFilters}/>
                </Grid>
              )
            }
          })
        }
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid item md={3} style={{ padding: 20 }}>
        <List height="100%" width="100%" display="flex">
          {studentOptions.map((item, index) => {
            return (
              <ListItem
                classes={{ root: classes.listFilters }}
                key={index}                        
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
            );
          })}
        </List>
      </Grid>
        
      <Grid item md={1}>
        <Divider orientation="vertical"/>
      </Grid>

      <Grid item md={8} style={{ paddingRight: 36 }}>
        <Typography variant="h6" gutterBottom>
          Aluno
        </Typography>
        {studentFilters.length !== 0 ?
          refineFilters()
          :
          <Box className={classes.instructionText}>
            <Typography variant="subtitle2" >
              Seus filtros selecionados serão exibidos e refinados aqui.
            </Typography>
            <Typography variant="subtitle1" >
              Caso nenhuma opção seja selecionada, os filtros referentes aos Alunos serão desconsiderados.
            </Typography>
          </Box>
        }
      </Grid>
    </Grid>
  )
}

export default StudentStep;