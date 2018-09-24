import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { addAuthor } from "../../redux/actions/author";
import { addBook } from "../../redux/actions/book";
import { fetchGenres } from '../../redux/actions/genre';
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
    this.props.addAuthor(this.state.authorModel);
  }

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
              handleGenresChange={this.handleGenresChange}
              handleSubmit={this.handleAddAuthorSubmit}
              genres={this.props.genres.map(genre => {
                return {
                  value: genre.id,
                  label: genre.name
                }
              })}
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
  addAuthor: author => dispatch(addAuthor(author)),
  addBook: book => dispatch(addBook(book)),
  fetchGenres: () => dispatch(fetchGenres())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPage);
