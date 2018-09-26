import React from "react";
import { Grid } from "@material-ui/core";

const ImageUploadView = props => {
  const { handleChange, imageUrl } = props;
  return (
    <Grid container>
      <Grid item md={12} style={{ textAlign: "center" }}>
        {imageUrl && <img style={{ maxWidth: "100%" }} src={imageUrl} />}
      </Grid>
      <Grid item md={12} align="center">
        <input type="file" onChange={handleChange} />
      </Grid>
    </Grid>
  );
};

export default ImageUploadView;
