import React, {useState} from 'react';
import CompaniesCategories from './CompaniesCategories';

// File
import companies from '../util/companyList.json'

// Material Ul 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: '70px',
    minHeight:'80vh',
  },
  gridTop:{
    backgroundColor:	'#2f6a87',
    color: 'white',
    width: '200px',
    height: '1000px',
    overflow: 'scroll',
  },
  gridDown:{
    backgroundColor: '#6eb2cc',
    color: 'white',
    fontStyle: 'italic',
  },
   h1:{
    position: 'sticky',
    top: '0',
   }
}));



const Main=()=> {
  const classes = useStyles();  

  const [selected,setSelected] = useState();


  const handelClick = (companyId) => {
    setSelected(companyId);

  }
    return (
        <div className={classes.root}>
         <Grid container spacing={2}>
            <Grid item xs={12} md={8} className={classes.gridTop}>
             <h1 className={classes.h1}>Name of the companies</h1>
              {Object.entries(companies).map(([key,company]) =>( 
                   <ListItem 
                  button
                  item key={key} onClick={()=> handelClick(key)}> 
                  {company.title}
                  </ListItem>
                ))}
              </Grid>
             <Grid item xs={12} md={4} className={classes.gridDown}>
               <CompaniesCategories selected={selected}/>
            </Grid>
          </Grid>
        </div>
    )
}
export default Main