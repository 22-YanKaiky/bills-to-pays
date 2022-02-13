import React, { useEffect, useState } from "react";
import AddCircle from '@mui/icons-material/AddCircle';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SchoolIcon from '@mui/icons-material/School';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Checkbox, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import axios from "axios";

const useStyles = makeStyles({
  paper: {
    borderRadius: 6,
    padding: 16
  },

  cards: {
    display: 'flex',
    justifyContent: 'space-around'
  },

  grid: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  spanGray: {
    color: '#626060',
  },

  spanGreen: {
    color: '#04d704',
  },

  spanRed: {
    color: '#ff2525',
  },

  currency: {
    background: '#e8e7e7',
    borderRadius: '3px',
    margin: '5px 0',
    padding: 10,
  },

  bills: {
    background: '#f2f2f2',
    borderRadius: '3px',
    margin: '5px 0',
    padding: 5,
  }
})

export default function Home() {
  const classes = useStyles();
  const [billsToPay, setBillsToPay] = useState(Number([0]));
  const [dollarQuote, setDollarQuote] = useState(0);
  const [euroQuote, setEuroQuote] = useState(0);
  const [checked, setChecked] = useState([]);
  const [valuesChecked, setValuesChecked] = useState([]);


  useEffect(() => {
    async function fetchMoney() {
      const response = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL');
      setEuroQuote(response.data.EURBRL.bid)
      setDollarQuote(response.data.USDBRL.bid)
    }

    fetchMoney()
  }, [billsToPay])

  const newValuesChecked = [...valuesChecked];

  console.log('response', newValuesChecked)

  const handleToggle = (val, value) => () => {
    const currentObjIndex = valuesChecked.indexOf(val);
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentObjIndex === -1) {
      newValuesChecked.push(val)
    } else {
      newValuesChecked.splice(currentObjIndex, 1)
    }

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setBillsToPay(newChecked.reduce((v, tv) => v + tv, 0))

    setChecked(newChecked);

    setValuesChecked(newValuesChecked)
  };

  let currency = 1200.00;

  const bills = [
    {
      name: 'Dentist',
      value: 169.73,
      icon: <SentimentVerySatisfiedIcon />
    },
    {
      name: 'College',
      value: 189.68,
      icon: <SchoolIcon />
    },
    {
      name: 'Netflix',
      value: 55.90,
      icon: <ConnectedTvIcon />
    },
    {
      name: 'Light',
      value: 180.00,
      icon: <LightbulbIcon />
    },
    {
      name: 'Internet',
      value: 130.00,
      icon: <CellWifiIcon />
    },
    {
      name: 'Credit Card',
      value: 400.00,
      icon: <CreditCardIcon />
    },
  ]

  const valueFormat = (locale, currency, value) => {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(value);
  }

  const moneyFormat = (value) => {
    if (value === 0) {
      return (
        <Typography className={classes.spanGray}>
          {valueFormat('pt-BR', 'BRL', value)}
        </Typography>
      )
    }

    if (value > 0) {
      return (
        <Typography className={classes.spanGreen}>
          {valueFormat('pt-BR', 'BRL', value)}
        </Typography>
      )
    }

    if (value < 0) {
      return (
        <Typography className={classes.spanRed}>
          {valueFormat('pt-BR', 'BRL', value)}
        </Typography>
      )
    }
  }

  const quoteFormat = (value) => {
    const valueUSD = value / dollarQuote;
    const valueEUR = value / euroQuote;

    if (value === 0) {
      return (
        <Typography className={classes.spanGray}>
          {valueFormat('pt-BR', 'BRL', value)}<br />
          {valueFormat('de-DE', 'EUR', valueEUR)}<br />
          {valueFormat('en-US', 'USD', valueUSD)}
        </Typography>
      )
    }

    if (value > 0) {
      return (
        <Typography className={classes.spanRed}>
          {valueFormat('pt-BR', 'BRL', value)}<br />
          {valueFormat('de-DE', 'EUR', valueEUR)}<br />
          {valueFormat('en-US', 'USD', valueUSD)}
        </Typography>
      )
    }
  }

  return (
    <Grid>
      <Paper elevation={10}>
        <Grid align='center'>
          <h2>Bills To Pay</h2>
        </Grid>
      </Paper>

      <div className={classes.cards}>
        <Paper className={classes.paper} elevation={5}>
          <Grid className={classes.grid}>
            <Typography variant="h6" className={classes.grid}>Fixed expenses</Typography>

            <IconButton color="error" aria-label="upload picture" component="span">
              <AddCircle />
            </IconButton>
          </Grid>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {bills.map((val) => {
              const labelId = `checkbox-list-label-${val.name}`;

              return (
                <>
                  <ListItem
                    key={val.value}
                    secondaryAction={
                      <IconButton edge="end" title={valueFormat('pt-BR', 'BRL', val.value)} aria-label="comments">
                        {val.icon}
                      </IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton role={undefined} onClick={handleToggle(val, val.value)} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(val.value) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={val.name} />
                    </ListItemButton>
                  </ListItem>

                  <Divider />
                </>
              );
            })}
          </List>
        </Paper>

        <Paper className={classes.paper} elevation={5}>
          <Grid align='center'>
            <Typography variant="h6" className={classes.grid}>Bills To Pay</Typography>
          </Grid>

          <Grid className={classes.currency}>{moneyFormat(currency - billsToPay)}</Grid>

          {newValuesChecked.map((val) => {
            return (
              <>
                <Divider />

                <Grid className={classes.bills} key={val.value}>
                  <Typography variant="p" className={classes.grid}>{val.name}</Typography>

                  <Typography className={classes.spanRed}>{valueFormat('pt-BR', 'BRL', val.value)}</Typography>
                </Grid>
              </>
            )
          })}
        </Paper>

        <Grid value='amount'>{quoteFormat(billsToPay)}</Grid>
      </div>
    </Grid>
  )
}
