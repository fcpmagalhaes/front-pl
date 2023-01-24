
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textDescription: {
    width: '100%',
    textAlign: 'center',
    fontSize: '15px'
  }
}))

const ResearchDescription = () => {
  const classes = useStyles();
  const text = "Instituição: Universidade de Brasília e UCB curso: Computação, cor/raça: preta, parda, indígena, ingresso por vestibular.";
  return (
    <div className={classes.textDescription}>{text}</div>
  )
}

export default ResearchDescription;