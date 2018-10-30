import React from "react";
import {
  Input,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";

const BookSortAndSearchView = props => {
  const { handleSelectChange, handleSearchChange, value } = props;

  return (
    <Grid container spacing={24} style={{ marginBottom: "2px" }}>
      <Grid item md={3}>
        <FormControl className="select">
          <InputLabel shrink={value ? "true" : ""} htmlFor="sort_select">
            <Typography variant="subheading">Sortuj według</Typography>
          </InputLabel>
          <Select
            id="sort_select"
            value={value}
            onChange={handleSelectChange}
            inputProps={{
              id: "sort_select",
              name: "sort_select"
            }}
          >
            <MenuItem value={null}>domyślnie</MenuItem>
            <MenuItem value={"abc"}>alfabetycznie rosnąco</MenuItem>
            <MenuItem value={"cba"}>alfabetycznie malejąco</MenuItem>
            <MenuItem value={"123"}>najwyżej ocenionych</MenuItem>
            <MenuItem value={"new"}>najnowszych</MenuItem>
            <MenuItem value={"old"}>najstarszych</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={6}>
        <Input
          type="text"
          placeholder="Wyszukaj książkę"
          className="search_bar"
          onChange={handleSearchChange}
        />
      </Grid>
    </Grid>
  );
};

export default BookSortAndSearchView;
