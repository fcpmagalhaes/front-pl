// import "./styles.css";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import BarChartComponent from '../../components/charts/BarChart';
import AreaChartComponent from '../../components/charts/AreaChart';
import LineChartComponent from '../../components/charts/LineChart';
import PieChartComponent from '../../components/charts/PieChart';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "sans-serif",
    textAlign: "center"
  },
}));

function getChartContent(step) {
  switch (step) {
    case 'area': 
      return <AreaChartComponent />
    case 'line':
      return <LineChartComponent />;
    case 'bar':
      return <BarChartComponent />;
    case 'pie':
      return <PieChartComponent />;
    default:
      throw new Error('Unknown chart');
  }
}

function ChartExibition() {
  const classes = useStyles();
  return (
    <Grid container direction="row" spacing={3} justifyContent="space-evenly" alignItems="center">
      <Grid item md={6} xs={12}>
        {getChartContent('bar')}
      </Grid>
    </Grid>
  );
}

export default ChartExibition;
