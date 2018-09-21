import React, { Component } from "react";
import { connect } from "react-redux";
import moment from 'moment';
import { addAuthor } from "../../redux/actions/author";
import { addBook } from "../../redux/actions/book";
import AddAuthorFormView from "./Views/author";
import { Grid, Typography } from "@material-ui/core";

class AddPage extends Component {
  state = {
    authorModel: {
      firstname: "",
      lastname: "",
      description: "",
      dateOfBirth: moment().format("YYYY-MM-DD"),
      birthCity: "",
      birthCountry: "",
      gender: "",
      genreIds: []
    },
    bookModel: {
      title: "",
      description: "",
      pagesCount: "",
      released: "",
      genreIds: [],
      authorIds: []
    },
    showBookForm: true
  };

  handleAddAuthorFormChange = e => {
    var model = this.state.authorModel;
    const { name, value } = e.target;
    model[name] = value;
    this.setState({
      authorModel: Object.assign(this.state.authorModel, model)
    });
    console.log(this.state.authorModel);
  };

  handleAddBookFormChange = e => {
    var model = this.state.bookModel;
    const { name, value } = e.target;
    model[name] = value;
    this.setState({ bookModel: Object.assign(this.state.bookModel, model) });
  };

  render() {
    return (
      <div className="add_page">
        <Typography variant="display1" align="center">
          Dodaj książkę lub autora
        </Typography>
        <Grid container>
          <Grid item md={6}>
            <AddAuthorFormView
              data={this.state.authorModel}
              handleChange={this.handleAddAuthorFormChange}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addAuthor: author => dispatch(addAuthor(author)),
  addBook: book => dispatch(addBook(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPage);
