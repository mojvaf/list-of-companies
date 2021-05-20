import React, {useState} from 'react';
import CompaniesCategories from './CompaniesCategories';

// Flies
import companies from '../util/companyList.json'

// Material Ul 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Main=()=> {
  const classes = useStyles();  

  const [selected,setSelected] = useState();
  

  const handelClick = (companyId) => {
    setSelected(companyId);

  }

    return (
        <div className={classes.root}>
           <Grid container spacing={3}>
              {Object.entries(companies).map(([key,company]) =>(
                  <Grid item key={key}> 
                  <Paper className={classes.paper}>Company Name:  {company.title}
                  <Button color="secondary" onClick={()=> handelClick(key)}>see the categories</Button>
                  </Paper>
                  </Grid>
              ))}
          </Grid>
          <CompaniesCategories selected={selected} />
        </div>
    )
}
export default Main