import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { addAuthor } from "../../redux/actions/author";
import { addBook } from "../../redux/actions/book";
import { fetchGenres } from "../../redux/actions/genre";

import AddAuthorFormView from "./Views/author";
import { Grid, Typography } from "@material-ui/core";
import ImageUploadView from "./Views/image";

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
    showBookForm: true,
    file: null,
    imagePreviewUrl: null
  };

  componentDidMount() {
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

  handleGenresChange = values => {
    this.setState({
      authorModel: { ...this.state.authorModel, genreIds: values }
    });
  };

  handleAddAuthorSubmit = e => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("file", this.state.file);
    this.props.addAuthor(this.state.authorModel, formData);
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

  render() {
    return (
      <div className="add_page">
        <Typography variant="display1" align="center">
          Dodaj książkę lub autora
        </Typography>
        <Grid container>
          <Grid item md={6} align="center">
            <AddAuthorFormView
              data={this.state.authorModel}
              handleChange={this.handleAddAuthorFormChange}
              handleGenresChange={this.handleGenresChange}
              handleSubmit={this.handleAddAuthorSubmit}
              genres={this.props.genres.map(genre => {
                return {
                  value: genre.id,
                  label: genre.name
                };
              })}
            />
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
  genres: state.genres.data
});

const mapDispatchToProps = dispatch => ({
  addAuthor: (author, image) => dispatch(addAuthor(author, image)()),
  addBook: book => dispatch(addBook(book)),
  fetchGenres: () => dispatch(fetchGenres())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPage);
