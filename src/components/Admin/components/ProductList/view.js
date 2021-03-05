import React from 'react';
import '../../../../App.css';
import { List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  title: {
    height: 25
  },
  list: {
    // (4% = footer) + (90px = NavBox) + (10px = Navbox margin) + (25px = title)
    height: "calc(96% - 125px)",
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      // hidden
      width: '0px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgb(49, 49, 49)',
      outline: '1px solid rgb(41, 41, 41)'
    }
  }
});

export default function DeleteProductView({
  state,
  handleListItemClick
}) {
  const styles = useStyles();

  return (
    <div className="App">
      <Typography variant="h5" className={styles.title}>
        Products
      </Typography>
      <List component="nav" className={styles.list}>
          <ListItem
            button
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText primary={state.products[0].name} />
            <ListItemText secondary={state.products[0].price} />
            <ListItemText secondary={state.products[0].pictureName} />
          </ListItem>
          <ListItem
            button
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary={state.products[1].name} />
            <ListItemText secondary={state.products[1].price} />
            <ListItemText secondary={state.products[1].pictureName} />
          </ListItem>
          <ListItem
            button
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemText primary={state.products[2].name} />
            <ListItemText secondary={state.products[2].price} />
            <ListItemText secondary={state.products[2].pictureName} />
          </ListItem>
      </List>
    </div>
  );
}
