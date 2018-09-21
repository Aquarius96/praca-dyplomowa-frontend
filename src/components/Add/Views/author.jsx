import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  FormControl
} from "@material-ui/core";

const AddAuthorFormView = props => {
  const { data, handleChange, handleSubmit } = props;
  return (
    <form id="add_author" onChange={handleChange}>
      <TextField
        label="Imię"
        name="firstname"
        value={data.firstname}
        margin="normal"
        className="input"
      />
      <TextField
        label="Nazwisko"
        name="lastname"
        value={data.lastname}
        margin="normal"
        className="input"
      />
      <TextField
        label="Życiorys"
        name="description"
        value={data.description}
        margin="normal"
        className="input"
      />
      <TextField
        label="Data urodzenia"
        name="dateOfBirth"
        value={data.dateOfBirth}
        margin="normal"
        className="input"
        type="date"        
      />
      <TextField
        label="Miejsce urodzenia"
        name="birthCity"
        value={data.birthCity}
        margin="normal"
        className="input"
        
      />
      <TextField
        label="Kraj pochodzenia"
        name="birthCountry"
        value={data.birthCountry}
        margin="normal"
        className="input"
      />
      <FormControl className="formControl input">
        <InputLabel htmlFor="sort_select">
          <Typography variant="subheading">Płeć</Typography>
        </InputLabel>
        <Select
          value={data.gender}
          onChange={handleChange}
          
          inputProps={{
            name: "gender"
          }}
        >
          <MenuItem value={"kobieta"}>kobieta</MenuItem>
          <MenuItem value={"mężczyzna"}>mężczyzna</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default AddAuthorFormView;
