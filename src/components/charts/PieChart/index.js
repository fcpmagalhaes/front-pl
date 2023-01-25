import { makeStyles } from '@material-ui/core/styles';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { useSelector } from 'react-redux';
import ResearchDescription from '../../ResearchDescription';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "sans-serif",
    textAlign: "center"
  },
}));

const colors = ['#0088FE', '#00C49F', '#FF8042', '#FFBB28', 'red', 'pink'];

export default function PieChartComponent() {
  const classes = useStyles();

  const { researchData } = useSelector((state) => {
    return state.infographic;
  });

  return (
    <>
        <PieChart
          classes={{ root: classes }}
          width={700}
          height={500}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 30
          }}
        >
          <Pie
            data={researchData}
            outerRadius={200}
            fill="#8884d8"
            nameKey="ano"
            dataKey="total"
            label
          >
            {researchData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      <ResearchDescription />
    </>
  );
}
