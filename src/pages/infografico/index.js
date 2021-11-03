import {useState, useEffect} from 'react';
import YearStep from './steps/YearStep';
import IesStep from './steps/IesStep';
import CollegeStep from './steps/CollegeStep';
import StudentStep from './steps/StudentStep';
import ChartSelectStep from './steps/ChartSelectStep';
import ChartExibition from './ChartExibition';
import Layout from '../../components/Layout';
import {
  Button,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from '../../store/infographic/actions';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),

  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


const steps = ['Período da Pesquisa','Instituição de Ensino', 'Curso', 'Aluno', 'Gráfico'];

function getStepContent(step) {
  switch (step) {
    case 0: 
      return <YearStep />
    case 1:
      return <IesStep />;
    case 2:
      return <CollegeStep />;
    case 3:
      return <StudentStep />;
    case 4:
      return <ChartSelectStep />;
    default:
      throw new Error('Unknown step');
  }
}

function Infograficos() {
  const classes = useStyles();

  const { activeStep, loading } = useSelector((state) => {
    return state.infographic;
  });
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    
  }, []);

  const handleNext = () => {
    dispatch(Creators.updateStep(activeStep + 1));
  };

  const handleBack = () => {
    dispatch(Creators.updateStep(activeStep - 1));
  };

  return (
    <Layout title='Consulta Microdados INEP'>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Seleção de Filtros
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <>
                {activeStep === steps.length ? (
                  <ChartExibition />
                ) : (
                  <>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Voltar
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Gerar Infográfico' : 'Avançar'}
                      </Button>
                    </div>
                  </>
                )}
              </>
            </Paper>
          </main>
    </Layout>
  )
}

export default Infograficos;