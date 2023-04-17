import { useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import  { Button } from "@material-ui/core"
import Student from './components/showStudent/showStudent.jsx';
import Create from './components/createStudent/createStudent.jsx';
import './App.css';
import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appbar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Student Create & show</Typography>
        </AppBar>



        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="strect">
              <Grid item xs={12} sm={7} >
                <AppBar className={classes.appbar} position="static" color="inherit">
                  <Student />
                </AppBar>
              </Grid>

              <Grid item xs={12} sm={4} >
                <AppBar className={classes.appbar} position="static" color="inherit">
                  <Create />
                </AppBar>
              </Grid>

            </Grid>
          </Container>
        </Grow>

      </Container>


    </div>
  )
}

export default App
