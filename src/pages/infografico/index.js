import {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import MultipleSelect from '../../components/MultipleSelect';
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
  Input,
  InputLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import InputAdornment from '@material-ui/core/InputAdornment';



import { iesOptions } from '../../mock/filters'

const useStyles = makeStyles((theme) => ({

  listFilters: {
    paddingTop: 6,
    paddingBottom: 6,
    
  },
  instructionText: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '20px',
    marginLeft: '0px',
    border: '2px dotted #074EE8',
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



export default function Infograficos() {
  const classes = useStyles();

  const [iesFilters, setIesFilters] = useState([]);
  const [refinedFilters, setRefinedFilters] = useState([]);

  function showIcon(item) {
    if (verifyFilterSelected(item)) {
      return (<><RemoveCircleOutlineIcon style={{ marginLeft: '10px' }} /></>);
    }
    return (<><AddCircleOutlineIcon style={{ marginLeft: '10px' }}/></>);
  }

  function addRemoveFilter(item) {
    const isIncuded = iesFilters.some(filter => filter.value === item.value);
    if (isIncuded) {
      const newFilter = iesFilters.filter(e => e.value !== item.value);
      setIesFilters(newFilter);
      setRefinedFilters(newFilter);
    } else {
      setIesFilters([...iesFilters, item]);
      if(item.options) {
        const {options, ...rest} = item;
        setRefinedFilters([...refinedFilters, rest]);
      } else {
        setRefinedFilters([...refinedFilters, item]);
      }
    }
  }
  function verifyFilterSelected(item) {
    return iesFilters.some(filter => filter.value === item.value);
  }

  function refineFilters() {
    return (
      <Grid container spacing={4}>
        {
          iesFilters.map((item) => {
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
                  <InputLabel htmlFor="standard-adornment-amount">{item.label}</InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    value={item.amount}
                    // onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    // variant="filled"
                    type="number"
                  />
                </Grid>
              )
            }
          })
        }
      </Grid>
    );
  }

  return (
    <Layout title='Consulta Microdados INEP'>
      <Box mx={4} my={2}>
        <Grid container >
          <Grid item md={3} style={{ padding: 20 }}>
            <List height="100%" width="100%" display="flex">
              {iesOptions.map((item) => {
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
                );
              })}
            </List>
          </Grid>
            
          <Grid item md={1}>
            <Divider orientation="vertical"/>
          </Grid>

          <Grid item md={8} style={{ paddingRight: 36 }}>
            <h1>Infograficos</h1>
            {iesFilters.length !== 0 ?
              refineFilters()
              :
              <Box className={classes.instructionText}>
                <Typography variant="body2" >
                  Seus filtros selecionados serão exibidos e refinados aqui.
                </Typography>
              </Box>
            }
          </Grid>
        </Grid>

        {/* <Grid container style={{ padding: 36 }}>
          <Grid item md={3}></Grid>
          <Grid item md={9} container justifyContent="space-between">

            <Button
              color="secondary"
              component="a"
              variant="contained"
              // onClick={() => router.push('/infografico')}
              classes={{ root: classes.navigationButton }}
            >
              Voltar
            </Button>
            <Button
              color="secondary"
              component="a"
              variant="contained"
              // onClick={() => router.push('/infografico')}
              classes={{ root: classes.navigationButton }}
            >
              Avançar
            </Button>
          </Grid>
        </Grid> */}
        
      </Box>
    </Layout>
  )
}
