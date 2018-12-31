import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { addAuthor, fetchAuthors } from "../../redux/actions/author";
import { addBook } from "../../redux/actions/book";
import { fetchGenres } from "../../redux/actions/genre";

import AddAuthorFormView from "./Views/author";
import { Grid, Typography, Select, MenuItem } from "@material-ui/core";
import ImageUploadView from "./Views/image";
import AddBookFormView from "./Views/book";

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
      pagesCount: null,
      released: moment().format("YYYY-MM-DD"),
      genreIds: [],
      authorIds: []
    },
    showAuthorForm: false,
    file: null,
    imagePreviewUrl: null
  };

  componentDidMount() {
    this.props.fetchAuthors();
    this.props.fetchGenres();
  }

  handleAddAuthorFormChange = e => {
    var model = this.state.authorModel;
    const { name, value } = e.target;
    model[name] = value;
    this.setState({
      authorModel: Object.assign(this.state.authorModel, model)
    });
  };

  handleAddBookFormChange = e => {
    var model = this.state.bookModel;
    const { name, value } = e.target;
    model[name] = value;
    this.setState({ bookModel: Object.assign(this.state.bookModel, model) });
  };

  handleAuthorGenresChange = values => {
    this.setState({
      authorModel: { ...this.state.authorModel, genreIds: values }
    });
  };

  handleBookGenresChange = values => {
    this.setState({
      bookModel: { ...this.state.bookModel, genreIds: values }
    });
  };

  handleBookAuthorsChange = values => {
    this.setState({
      bookModel: { ...this.state.bookModel, authorIds: values }
    });
  };

  handleAddAuthorSubmit = e => {
    e.preventDefault();
    if (this.state.authorModel.genreIds.length === 0) {
      window.alert('Musisz wybrać co najmniej jeden gatunek.');
      return;
    }
    var formData = new FormData();
    formData.append("file", this.state.file);
    this.props.addAuthor(this.state.authorModel, formData);
    window.alert("Pomyślnie dodano nowego autora!");
  };

  handleAddBookSubmit = e => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("file", this.state.file);
    this.props.addBook(this.state.bookModel, formData);
    window.alert("Pomyślnie dodano nową książkę!");
  };

  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  handleImageSubmit = e => {
    e.preventDefault();
  };

  handleShowForm = () => {
    this.setState(prevState => {
      return {
        showAuthorForm: !prevState.showAuthorForm
      };
    });
  };

  render() {
    return (
      <div className="add_page">
        <Typography variant="" align="center">
          <Select
            value={this.state.showAuthorForm}
            onChange={this.handleShowForm}
          >
            <MenuItem defaultChecked value={true}>
              Dodaj autora
            </MenuItem>
            <MenuItem value={false}>Dodaj książkę</MenuItem>
          </Select>
        </Typography>
        <Grid container>
          <Grid item md={6} align="center">
            {this.state.showAuthorForm ? (
              <AddAuthorFormView
                data={this.state.authorModel}
                handleChange={this.handleAddAuthorFormChange}
                handleGenresChange={this.handleAuthorGenresChange}
                handleSubmit={this.handleAddAuthorSubmit}
                genres={this.props.genres.map(genre => {
                  return {
                    value: genre.id,
                    label: genre.name
                  };
                })}
              />
            ) : (
                <AddBookFormView
                  data={this.state.bookModel}
                  handleChange={this.handleAddBookFormChange}
                  handleAuthorsChange={this.handleBookAuthorsChange}
                  handleGenresChange={this.handleBookGenresChange}
                  handleSubmit={this.handleAddBookSubmit}
                  authors={this.props.authors.map(author => {
                    return {
                      value: author.id,
                      label: author.name
                    };
                  })}
                  genres={this.props.genres.map(genre => {
                    return {
                      value: genre.id,
                      label: genre.name
                    };
                  })}
                />
              )}
          </Grid>
          <Grid item md={6}>
            <ImageUploadView
              handleChange={this.handleImageChange}
              imageUrl={this.state.imagePreviewUrl}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authors: state.authors.data,
  genres: state.genres.data
});

const mapDispatchToProps = dispatch => ({
  addAuthor: (author, image) => dispatch(addAuthor(author, image)()),
  fetchAuthors: () => dispatch(fetchAuthors()),
  addBook: (book, image) => dispatch(addBook(book, image)()),
  fetchGenres: () => dispatch(fetchGenres())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPage);
