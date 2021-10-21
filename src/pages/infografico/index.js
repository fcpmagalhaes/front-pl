import {useState, useEffect} from 'react';
import IesStep from './IesStep';
import CollegeStep from './CollegeStep';
import StudentStep from './StudentStep';
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

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
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

const steps = ['Instituição de Ensino', 'Curso', 'Aluno'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <IesStep />;
    case 1:
      return <CollegeStep />;
    case 2:
      return <StudentStep />;
    default:
      throw new Error('Unknown step');
  }
}


function Infograficos() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
                  <>
                    <Typography variant="h5" gutterBottom>
                      Aqui vai a exibição do gráfico
                    </Typography>
                  </>
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