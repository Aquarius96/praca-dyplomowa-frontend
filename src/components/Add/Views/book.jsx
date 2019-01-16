import React from "react";
import { TextField, FormControl, Button } from "@material-ui/core";
import MySelect from "../../Views/select";

const AddBookFormView = props => {
  const {
    data,
    handleChange,
    handleSubmit,
    authors,
    genres,
    handleAuthorsChange,
    handleGenresChange
  } = props;
  return (
    <form id="add_book" onChange={handleChange} onSubmit={handleSubmit}>
      <TextField
        label="Tytuł"
        name="title"
        value={data.title}
        margin="normal"
        className="input"
      />
      <TextField
        label="Ilość stron"
        name="pagesCount"
        value={data.pagesCount}
        margin="normal"
        className="input"
        type="number"
      />
      <TextField
        label="Data wydania"
        name="released"
        value={data.released}
        margin="normal"
        className="input"
        type="date"
      />
      <FormControl className="formControl input" style={{ zIndex: "10" }}>
        <MySelect
          options={authors}
          values={data.genreIds}
          label={"Gatunki"}
          placeholder={"Wybierz autorów"}
          handleValuesChange={handleAuthorsChange}
        />
        <MySelect
          options={genres}
          values={data.genreIds}
          label={"Gatunki"}
          placeholder={"Wybierz gatunki książki"}
          handleValuesChange={handleGenresChange}
        />
      </FormControl>
      <TextField
        label="Opis"
        name="description"
        value={data.description}
        margin="normal"
        className="input"
        variant="outlined"
        multiline
        rows={4}
      />
      <Button variant="contained" type="submit" color="primary">
        Dodaj książkę
      </Button>
    </form>
  );
};

export default AddBookFormView;
