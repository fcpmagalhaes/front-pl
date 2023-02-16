import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textDescription: {
    width: '100%',
    textAlign: 'center',
    fontSize: '15px',
  },
}));

const ResearchDescription = () => {
  const classes = useStyles();
  const text = '';
  // const text =
  //   'Instituição: Universidade de Brasília, curso: Computação Licenciatura, tipo de situação: formado, sexo: masculino, cor/raça: preta, parda e indígena';
  return <div className={classes.textDescription}>{text}</div>;
};

export default ResearchDescription;
