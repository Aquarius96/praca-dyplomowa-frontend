import React from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const AddReadBookPanelView = props => {
  const { addReadBook, handleDateChange, date, book, user } = props;
  return (
    <ExpansionPanel style={{ width: "100%" }}>
      <ExpansionPanelSummary>
        <Typography variant="button">Przeczytałem</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <TextField
          onChange={handleDateChange}
          id="date"
          label="Kiedy?"
          type="date"
          defaultValue={date}
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          onClick={() =>
            addReadBook(user.email, {
              bookId: book.id,
              finished: date
            })
          }
        >
          Zatwierdź
        </Button>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default AddReadBookPanelView;
