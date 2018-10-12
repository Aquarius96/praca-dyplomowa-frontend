import React from 'react';
import { Paper, Grid } from '@material-ui/core';

const LibraryBookView = () => {
  return (
    <Paper>
      <Grid container>
      <Grid item md={3}>
      <img
          width="180"
          height="230"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcGAmbKRhO9zYpnttSkwef1Rr-Lr5emDd3RyORBCF8tO6AK3BSA"
          }
          alt=""
        />
      </Grid>
      </Grid>
    </Paper>
  );
};

export default LibraryBookView;