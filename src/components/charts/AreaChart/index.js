// import "./styles.css";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis, 
  CartesianGrid, 
  Tooltip,
  Label
} from 'recharts';
import { useSelector } from 'react-redux';
import ResearchDescription from '../../ResearchDescription';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "sans-serif",
    textAlign: "center"
  },
}));

export default function AreaChartComponent() {
  const classes = useStyles();
  const { researchData } = useSelector((state) => {
    return state.infographic;
  });

  return (
    <>
      <AreaChart
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
        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      <ResearchDescription />
    </>
  );
}
