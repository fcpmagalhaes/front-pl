import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import BarChartComponent from '../../components/charts/BarChart';
import AreaChartComponent from '../../components/charts/AreaChart';
import LineChartComponent from '../../components/charts/LineChart';
import PieChartComponent from '../../components/charts/PieChart';

function getChartContent(step) {
  switch (step) {
    case 'area':
      return <AreaChartComponent />;
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
  const { chartType } = useSelector((state) => state.infographic);

  return (
    <Grid
      container
      direction="row"
      spacing={3}
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid item md={6} xs={12}>
        {getChartContent(chartType)}
      </Grid>
    </Grid>
  );
}

export default ChartExibition;
