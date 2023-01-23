import {useState, useEffect} from 'react';
import {
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Card,
  CardActionArea
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from '../../../store/infographic/actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 445,
  },
  area: {
    background: theme.palette.secondary.main,
    border: 'solid 3px',
    borderColor: theme.palette.secondary.main,
    color: theme.palette.background.default
  },
}));


function ChartSelectStep() {
  const classes = useStyles();
  const [chart, setChart] = useState('');
  const dispatch = useDispatch();

  const { rangeYears, iesFilters, collegeFilters, studentFilters, loading } = useSelector((state) => {
    return state.infographic;
  });

  useEffect(() => {
    dispatch(Creators.loadResearch({rangeYears, iesFilters, collegeFilters, studentFilters}));
  }, []);

  function verifyChartSelected(area) {
    if (chart === area) {
      return classes.area;
    }
  };

  function setChartType(chart) {
    setChart(chart);
    dispatch(Creators.setChartType(chart));
  };

  return (
    <Grid container direction="row" spacing={3} justifyContent="space-evenly" alignItems="center">
      <Grid item md={5} xs={12}>
        <Card className={classes.root}>
          <CardActionArea onClick={() => setChartType('area')} className={verifyChartSelected('area')}>
            <CardMedia
              component="img"
              alt="Gráfico de Área"
              image="/area-chart.png"
              title="Gráfico de Área"
              height={200}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Gráfico de Área
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md={5} xs={12}>
        <Card className={classes.root}>
          <CardActionArea onClick={() => setChartType('bar')} className={verifyChartSelected('bar')}>
            <CardMedia
              component="img"
              alt="Gráfico de Barra"
              image="/bar-chart.png"
              title="Gráfico de Barra"
              height={200}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Gráfico de Barra
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md={5} xs={12}>
        <Card className={classes.root}>
          <CardActionArea onClick={() => setChartType('line')} className={verifyChartSelected('line')}>
            <CardMedia
              component="img"
              alt="Gráfico de Linha"
              image="/line-chart.png"
              title="Gráfico de Linha"
              height={200}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Gráfico de Linha
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md={5} xs={12}>
        <Card className={classes.root}>
          <CardActionArea onClick={() => setChartType('pie')} className={verifyChartSelected('pie')}>
            <CardMedia
              component="img"
              alt="Gráfico de Pizza"
              image="/pie-chart.png"
              title="Gráfico de Pizza"
              height={200}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Gráfico de Pizza
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ChartSelectStep;