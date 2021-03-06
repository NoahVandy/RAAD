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
  handleListItemClick,
  products
}) {
  const styles = useStyles();

  return (
    <div className="App">
      <Typography variant="h5" className={styles.title}>
        Products
      </Typography>
      <List component="nav" className={styles.list}>
          {products?.map((p) => (
            <ListItem
              button
              onClick={(event) => handleListItemClick(event, p.id)}
            >
              <ListItemText primary={p.name} />
              <ListItemText secondary={p.desc} />
              <ListItemText secondary={p.picUrl} />
            </ListItem>
          ))}
      </List>
    </div>
  );
}
