import {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import { 
  IconButton,
  Box,
  makeStyles,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  Typography,
  FormControlLabel,
  Switch
} from '@material-ui/core';


import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


import { iesOptions } from '../../mock/filters'

const useStyles = makeStyles((theme) => ({
  toolbox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 'calc(100vw - 60px)',
    marginBottom: '10px',
  },
  button: {
    margin: '5px 0px 5px 0px',
    width: '2em',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
  filterMenu: {
    height: 'calc(100% - 64px)',
    // backgroundColor: theme.palette.background.default,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
  },
  instructionText: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '20px',
    border: '2px dotted #074EE8',
  }
}));

export default function Infograficos() {
  const classes = useStyles();

  const [iesFilters, setIesFilters] = useState([]);

  useEffect(() => {
    console.log('filtros', iesFilters);
  }, [iesFilters])

  function showIcon(item) {
    if (verifyFilterSelected(item)) {
      console.log('entrei removere');
      return (<><RemoveCircleOutlineIcon style={{ marginLeft: '10px' }} /></>);
    }
    console.log('entrei adicionar');
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

  

  function refineFilters() {

    return (
      <>
        <List height="100%" width="100%" display="flex">
          {iesFilters.map((item) => {
            // if(item.options) {
            //   return (
            //     <ListItem
            //       classes={{ root: classes.listItem }}
            //       key={item.value}>
  
                  
            //     </ListItem>
            //   );
            // }
            return (
              <ListItem
                classes={{ root: classes.listItem }}
                key={item.value}>

                <FormControlLabel 
                  control={<Switch checked/>}
                  label={item.label}
                  onClick={() => addRemoveFilter(item)}
                />
              </ListItem>
            );
          })}
        </List>
      </>
    );
  }

  return (
    <Layout title='Consulta Microdados INEP'>
      <Box mx={4} my={2}>
        <Grid container>
            <Grid item md={3} style={{ padding: 20 }}>
              <Box
                classes={{ root: classes.filterMenu }}
              >
                <List height="100%" width="100%" display="flex">
                  {iesOptions.map((item) => {
                    return (
                      <ListItem
                        classes={{ root: classes.listItem }}
                        key={item.value}>

                        <Button
                          color="primary"
                          variant={verifyFilterSelected(item) ? "outlined" : "contained"}
                          onClick={() => addRemoveFilter(item)}
                        >
                          {item.label}
                          {showIcon(item)}
                        </Button>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Grid>
            
            <Grid item md={1}>
              <Divider orientation="vertical"/>
            </Grid>

            <Grid item md={8} style={{ padding: 20 }}>
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

      </Box>
    </Layout>
  )
}
