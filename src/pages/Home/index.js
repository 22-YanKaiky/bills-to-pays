import React, { useState } from "react";
import Payment from '@mui/icons-material/Payment';
import { Button, Checkbox, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  paper: {
    borderRadius: 6,
    padding: 16
  },

  cards: {
    display: 'flex',
    justifyContent: 'space-around'
  }
})

export default function Home() {
  const classes = useStyles();
  const [billsTopay, setBillsTopay] = useState([]);
  const [checked, setChecked] = useState([]);
  const [ligth, setLigth] = useState('');
  const [internet, setInternet] = useState('');
  const [creditCard, setCreditCard] = useState('');

  const bills = [
    {
      name: 'Dentista',
      value: 169.73,
    },
    {
      name: 'Faculdade',
      value: 189.68,
    },
    {
      name: 'Netflix',
      value: 55.90,
    },
    {
      name: 'Luz',
      value: ligth,
      // value: 180.00,
    },
    {
      name: 'Internet',
      value: internet,
      // value: 130.00,
    },
    {
      name: 'Cartão de Crédito',
      value: creditCard,
      // value: 400.00,
    },
  ]

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Grid>
      <Paper elevation={10} >
        <Grid align='center'>
          <h2>Bills To Pay</h2>
        </Grid>
      </Paper>

      <div className={classes.cards}>
        <Paper className={classes.paper} elevation={5}>
          <Grid>
            <h2>Despesas Fixas</h2>
          </Grid>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {bills.map((value) => {
              const labelId = `checkbox-list-label-${value.name}`;

              return (
                <ListItem
                  key={value.value}
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <Payment />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(value.value)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value.value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={value.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Paper>

        <Paper className={classes.paper} elevation={5}>
          <Grid align='center'>
            <h2>Bills To Pay</h2>
          </Grid>
        </Paper>

        <Typography value='amount'>{`R$ ${billsTopay.value === undefined && 0}`}</Typography>
      </div>
    </Grid>
  )
}
