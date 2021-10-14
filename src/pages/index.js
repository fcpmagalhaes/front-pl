import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Button, makeStyles } from '@material-ui/core';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Layout title='Consulta Microdados INEP'>
      <Box mx={4} my={2}>
        <Grid container>
          <Grid item md={7} xs={12} style={{ padding: 20 }}>
          <h1>Gerador de Dashboard</h1>
            <Typography variant="body2">
            O Gerador de Dashboard é uma ferramenta possibilita a produção semi automática de infográficos para Jornalismo de Dados, usando dados do Censo de Educaçnao Superior.
          </Typography>
          <Typography variant="body2">
            Seu objetivo é auxiliar jornalistas e a sociedade civil a extrair novas informações dos microdados do censo de 2015 a 2019 referentes aos alunos universitários do Distrito Federal.
          </Typography>
          </Grid>
          <Grid item md={5} xs={12}>
            <img src="chart-home.png" alt="Imagem gráfico" className={classes.img}/>
          </Grid>
          <Grid container justifyContent="flex-end" style={{ padding: 20 }}>
            <Button
              color="primary"
              component="a"
              variant="contained"
              endIcon={<AddCircleOutlineIcon />}
              // onClick={() => signIn('google')}
            >
              Iniciar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Layout>
   
  )
}
