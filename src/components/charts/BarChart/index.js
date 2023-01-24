import { makeStyles } from '@material-ui/core/styles';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell,
  Label
} from "recharts";
import { useSelector } from 'react-redux';
import ResearchDescription from '../../ResearchDescription';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "sans-serif",
    textAlign: "center"
  }
}));

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

export default function BarChartComponent() {
  const classes = useStyles();

  const { researchData } = useSelector((state) => {
    return state.infographic;
  });

  return (
    <>
      <BarChart
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
        <Bar dataKey="total">
          {researchData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
      <ResearchDescription />
    </>
  );
}
