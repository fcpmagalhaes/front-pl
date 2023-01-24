
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label
} from 'recharts';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ResearchDescription from '../../ResearchDescription';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "sans-serif",
    textAlign: "center"
  },
}));

export default function LineChartComponent() {
  const classes = useStyles();

  const { researchData } = useSelector((state) => {
    return state.infographic;
  });

  return (
    <>
      <LineChart
        classes={{ root: classes }}
        width={700}
        height={500}
        data={researchData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 30
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ano">
          <Label value="ano" offset={0} position="bottom" />
        </XAxis>
        <YAxis label={{ value: 'quantidade total', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
      </LineChart>
      <ResearchDescription />
    </>
  );
}


