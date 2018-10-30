import React from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";

const ReviewView = props => {
  return (
    <Paper
      style={{
        marginTop: "5px",
        padding: "15px"
      }}
    >
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h3">Tytuł recenzji</Typography>
        </Grid>
        <Grid
          item
          sm={12}
          style={{
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            tempor lacus. Proin bibendum rhoncus aliquet. Aenean egestas lacus
            sit amet odio varius, vel elementum orci egestas. Integer aliquet
            vitae sapien nec consectetur. Curabitur blandit nulla libero, eget
            facilisis nibh mattis sed. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Vivamus et libero
            pellentesque, scelerisque metus eu, blandit diam. Donec pulvinar
            urna quis augue sollicitudin aliquet. Ut sodales a sapien ac
            tristique. Nulla enim nulla, auctor quis ante non, pellentesque
            feugiat nisi. In auctor pulvinar consectetur. Curabitur luctus
            mollis imperdiet. Proin sed odio sit amet elit sagittis feugiat
            maximus sit amet lorem. Vivamus id ultricies felis. Mauris mi
            sapien, vestibulum in arcu sed, fermentum finibus risus. Suspendisse
            sit amet hendrerit nibh. Donec nibh risus, feugiat non mauris vitae,
            rhoncus venenatis enim. Duis eget dignissim orci. Fusce id neque et
            nibh sodales tempor eget et nibh. Etiam est odio, sagittis vitae
            fringilla sit amet, maximus in justo. Vestibulum pulvinar diam eget
            lobortis venenatis. Aliquam augue diam, vestibulum vitae lectus ac,
            dignissim lobortis lectus. Donec pharetra laoreet ex in aliquam.
            Duis tempor nulla id nibh rutrum aliquet. Suspendisse ut commodo
            neque. Maecenas sed pretium diam. Integer ullamcorper, massa ut
            hendrerit vulputate, eros tortor ultrices lacus, a sollicitudin dui
            augue in ipsum. Donec sodales, neque quis venenatis pretium, lacus
            massa vehicula felis, vel scelerisque libero turpis nec ipsum. Nam
            pellentesque lobortis diam. Nam justo turpis, feugiat sit amet
            consequat sed, blandit malesuada lorem. In at odio tellus. Sed
            pretium scelerisque diam, eget tincidunt ligula facilisis at.
            Vivamus pulvinar scelerisque purus, a suscipit justo convallis
            vitae. Maecenas ac mauris feugiat, dignissim dolor vel, rutrum nisi.
            Pellentesque et nisi eget justo hendrerit cursus. Duis hendrerit ex
            eget nisi tempus pretium. Vivamus lobortis eleifend odio, a iaculis
            velit lacinia ac. Vestibulum massa lorem, maximus suscipit urna in,
            efficitur ultricies turpis. Pellentesque ac turpis sollicitudin,
            rutrum diam ut, placerat mauris. Quisque lobortis scelerisque elit
            non iaculis. Morbi at orci et risus faucibus faucibus. Praesent
            tincidunt ligula sapien, nec rutrum ipsum tincidunt ac. Nunc
            lobortis tellus vel justo efficitur, in congue dui mattis. Morbi nec
            neque tempus, dictum mi id, dictum mauris. Quisque dignissim
            ultrices ligula. In eget tortor dui. Vivamus velit diam, mollis id
            tincidunt facilisis, tempus quis elit. Vivamus sit amet imperdiet
            odio. Curabitur rutrum nisl vel diam fringilla, eget pulvinar libero
            eleifend. In viverra, justo vel aliquam lacinia, felis magna
            porttitor lorem, eget imperdiet lacus velit et nisl.{" "}
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography>
            Czy uznajesz tę recenzję za pomocną? 98% użytkowników odpowiedziało
            'Tak'
          </Typography>
        </Grid>
        <Grid item sm={12} style={{ marginTop: "10px" }}>
          <Button variant="contained">Tak</Button>
          <Button variant="contained">Nie</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReviewView;
