import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, Box } from '@material-ui/core';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  buttons: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
  instructionText: {
    textAlign: 'center',
    padding: '20px',
    marginBottom: '30px',
    marginTop: '30px',
    marginLeft: '0px',
    border: '2px dotted #1A5FC8',
    width: '100%'
  },
}));

export default function YearStep() {
  const classes = useStyles();
  
  const yearsLabel = [2015, 2016, 2017, 2018, 2019];

  const [years, setYears] = useState([]);

  useEffect(() => {
    console.log(years);
    console.log(typeof yearsLabel);
    
  }, [years])
  
  function verifyYearSelected(item) {
    return years.some(filter => filter === item);
  }

  function addRemoveYear(item) {
    if(item === 'all') {
      if (verifyAllSelected()) {
        setYears([]);
      } else {
        setYears(yearsLabel);
      }
    } else {
      const isIncuded = years.some(filter => filter === item);
      if (isIncuded) {
        const newYears = years.filter(e => e !== item);
        setYears(newYears);
      } else {
        setYears([...years, item]);
      }
    }
  }

  function verifyAllSelected() {
    return _.isEqual(years.sort(), yearsLabel.sort());
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item md={6} xs={12}>
        <Typography variant="h6" gutterBottom>
          Anos de filtro de pesquisa
        </Typography>
        <div className={classes.buttons}>
          { !years.length ?
            <Box className={classes.instructionText}>
              <Typography variant="subtitle2" >
                Selecione os anos a serem consultados para comparação no infográfico.
              </Typography>
            </Box> 
            : '' 
          }
          {yearsLabel.map((year) => {
            return (
              <Button
                variant="contained"
                color="secondary"
                variant={verifyYearSelected(year) ? "outlined" : "contained"}
                onClick={() => addRemoveYear(year)}
                disabled={verifyAllSelected()}
                className={classes.button}
              >
                {year}
              </Button>
            )
          })
          }
          <Button
                variant="contained"
                color="secondary"
                variant={verifyAllSelected() ? "outlined" : "contained"}
                onClick={() => addRemoveYear('all')}
                className={classes.button}
              >
                Todos anos
              </Button>
        </div>
      </Grid>
    </Grid>
  );
}