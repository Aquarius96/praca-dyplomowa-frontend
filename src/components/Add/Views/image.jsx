import React from "react";
import { Grid, Typography } from "@material-ui/core";

const ImageUploadView = props => {
  const { handleChange, imageUrl } = props;
  return (
    <Grid container>
      <Grid item md={12} style={{ textAlign: "center" }}>
        {imageUrl && <img style={{ maxWidth: "100%" }} src={imageUrl} alt="" />}
      </Grid>
      <Grid item md={12} align="center">
        <label htmlFor="img" className="imageButton">
          <Typography variant="button" color="primary">
            Wybierz obraz
          </Typography>
        </label>
        <input id="img" type="file" onChange={handleChange} />
      </Grid>
    </Grid>
  );
};

export default ImageUploadView;
