import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, Box } from '@material-ui/core';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from '../../../store/infographic/actions';

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
    width: '100%',
  },
}));

export default function YearStep() {
  const classes = useStyles();

  // const yearsLabel = [2015, 2016, 2017, 2018, 2019];
  const yearsLabel = [2018, 2019];

  const { rangeYears, loading } = useSelector((state) => state.infographic);

  const dispatch = useDispatch();

  function verifyYearSelected(item) {
    return rangeYears.some((filter) => filter === item);
  }

  function addRemoveYear(item) {
    if (item === 'all') {
      if (verifyAllSelected()) {
        dispatch(Creators.setRangeYears([]));
      } else {
        dispatch(Creators.setRangeYears(yearsLabel));
      }
    } else if (verifyYearSelected(item)) {
      const newYears = rangeYears.filter((e) => e !== item);
      dispatch(Creators.setRangeYears(newYears));
    } else {
      dispatch(Creators.setRangeYears([...rangeYears, item]));
    }
  }

  function verifyAllSelected() {
    return _.isEqual(rangeYears.sort(), yearsLabel.sort());
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item md={6} xs={12}>
        <Typography variant="h6" gutterBottom>
          Anos de filtro de pesquisa
        </Typography>
        <div className={classes.buttons}>
          {!rangeYears.length ? (
            <Box className={classes.instructionText}>
              <Typography variant="subtitle2">
                Selecione os anos a serem consultados para comparação no
                gráfico.
              </Typography>
            </Box>
          ) : (
            ''
          )}
          {yearsLabel.map((year, index) => (
            <Button
              key={index}
              color="primary"
              variant={verifyYearSelected(year) ? 'outlined' : 'contained'}
              onClick={() => addRemoveYear(year)}
              disabled={verifyAllSelected()}
              className={classes.button}
            >
              {year}
            </Button>
          ))}
          <Button
            color="primary"
            variant={verifyAllSelected() ? 'outlined' : 'contained'}
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
