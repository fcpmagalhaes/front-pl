import {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import { 
  IconButton,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  Typography,
  FormControlLabel,
  Switch,
  FormGroup,

  Checkbox,
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';


import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },

}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(item, theme) {
  return {
    fontWeight:
      verifyFilterSelected(item)
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Infograficos() {
  const classes = useStyles();
  const theme = useTheme();

  const [iesFilters, setIesFilters] = useState([]);

  useEffect(() => {
    console.log('filtros', iesFilters);
  }, [iesFilters])

  function showIcon(item) {
    if (verifyFilterSelected(item)) {
      return (<><RemoveCircleOutlineIcon style={{ marginLeft: '10px' }} /></>);
    }
    return (<><AddCircleOutlineIcon style={{ marginLeft: '10px' }}/></>);
  }

  function addRemoveFilter(item) {
    const isIncuded = iesFilters.some(filter => filter.value === item.value);
    if (isIncuded) {
      const newFilter = iesFilters.filter(e => e !== item);
      setIesFilters(newFilter);
    } else {
      setIesFilters([...iesFilters, item]);
    }
  }

  function verifyFilterSelected(item) {
    return iesFilters.some(filter => filter.value === item.value);
  }

  //verificar!
  const handleChange = (event) => {
    console.log('handle', event.target);
    // setIesFilters([...iesFilters, item]);
    // setPersonName(event.target.value);
  };


  function refineFilters() {
    console.log('entrei');
    return (
      <>
      <Grid container spacing={4}>
        {
          iesFilters.map((item) => {
            return (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <FormControlLabel
                  control={<Checkbox checked name={item.label} onClick={() => addRemoveFilter(item)}/>}
                  label={item.label}
                />
              </Grid>
            )
          })
        }
      </Grid>
      </>
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

        <Grid container style={{ padding: 36 }}>
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
        </Grid>
        
      </Box>
    </Layout>
  )
}
