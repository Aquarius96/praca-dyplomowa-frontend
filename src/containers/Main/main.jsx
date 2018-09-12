import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import {
  register,
  fetchUsers,
  fetchUser,
  deleteUser
} from "../../redux/actions/user";
import { addAuthor, fetchAuthors, addAuthorRate, addAuthorComment, deleteAuthorComment } from "../../redux/actions/author";
import { addReview, fetchReviews, addReviewRate } from "../../redux/actions/review";
import { addBook, fetchBooks, addBookRate, addBookComment, deleteBookComment } from "../../redux/actions/book";

const user = {
  firstname: "user",
  lastname: "z frontu",
  password: "tajne",
  emailAddress: "fajnyv4",
  username: "fajniejszy"
};

const book = {
  "title": "string",
  "originalTitle": "string",
  "description": "string",
  "pagesCount": 100,
  "released": "2018-09-11T13:47:04.104Z",
  "genreIds": [
    1
  ],
  "authorIds": [
    1
  ]
}

const review = {
  "userEmailAddress": "string",
  "title": "kolejna",
  "content": "string",
  "bookId": 1
}

class Main extends Component {
  static propTypes = {
    message: PropTypes.string,
    error: PropTypes.string,
    register: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchUser("aquarius96@wp.pl");
    this.props.fetchAuthors();
    this.props.fetchBooks();
    this.props.fetchReviews();
  }

  register = user => {
    this.props.register(user);
  };

  addBook = () => {
    this.props.addBook(book);
  }

  addReview = () => {
    this.props.addReview(review);
  }

  deleteUser = email => {
    this.props.deleteUser(email);
  };

  addAuthorRate = () => {
    this.props.addAuthorRate(1, {userEmailAddress: 'aquarius96@wp.pl', value: Math.floor((Math.random() * 100) + 1)});
  }

  addBookRate = () => {
    this.props.addBookRate(1, {
      userEmailAddress: 'aquarius96@wp.pl',
      value: Math.floor((Math.random() * 100) + 1)
    })
  }

  addReviewRate = () => {
    this.props.addReviewRate(1, {
      userEmailAddress: 'aquarius96@wp.pl',
      value: false
    })
  }

  addAuthorComment = () => {
    this.props.addAuthorComment(1, {content: 'dobry komentarz', userEmailAddress: 'aquarius96@wp.pl'});
  }

  deleteAuthorComment = () => {
    this.props.deleteAuthorComment(6);
  }

  addBookComment = () => {
    this.props.addBookComment(1, {content: 'dobry komentarz', userEmailAddress: 'aquarius96@wp.pl'});
  }

  deleteBookComment = () => {
    this.props.deleteBookComment(6);
  }

  render() {
    if (this.props.userLoading || this.props.authorLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Typography variant="display1" align="center" gutterBottom>
          Praca dyplomowa frontend
        </Typography>

        <button onClick={() => this.register(user)}>
          Zarejestruj użytkownika
        </button>
        <button onClick={this.addBook}>
          Dodaj ksiazke
        </button>
        <button onClick={this.addReview}>
          Dodaj recenzje
        </button>
        <button onClick={() => this.deleteUser("fajnyv4")}>
          Usuń użytkownika
        </button>
        <button onClick={this.addAuthorRate}>
          Dodaj ocenę autorowi
        </button>
        <button onClick={this.addBookRate}>
          Dodaj ocenę książce
        </button>
        <button onClick={this.addReviewRate}>
          Dodaj ocenę recenzji
        </button>
        <button onClick={this.addAuthorComment}>
          Dodaj komentarz autorowi
        </button>
        <button onClick={this.deleteAuthorComment}>
          Usuń komentarz autorowi
        </button>
        <button onClick={this.addBookComment}>
          Dodaj komentarz książce
        </button>
        <button onClick={this.deleteBookComment}>
          Usuń komentarz książce
        </button>

        {this.props.users &&
          this.props.users.map(user => {
            return <p>User {user.firstname}</p>
          })}
        {this.props.user &&
          "Oto nasz pojedynczy user " + this.props.user.firstname}
        {this.props.authors &&
          this.props.authors.map(author => {
            return <p>Author {author.firstname} {author.rating.value}</p>
          })}
        {this.props.books &&
        this.props.books.map(book => {
          return <p>Book {book.title} {book.rating.value}</p>
        })}
        {this.props.reviews &&
        this.props.reviews.map(review => {
          return <p>review {review.title} {review.rating.value}</p>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.userReducer.message,
  error: state.userReducer.error,
  users: state.userReducer.data,
  user: state.userReducer.entity,
  userLoading: state.userReducer.loading,
  authorLoading: state.authorReducer.loading,
  authors: state.authorReducer.data,
  books: state.bookReducer.data,
  reviews: state.reviewReducer.data
});

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(register(user)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: id => dispatch(fetchUser(id)),
  deleteUser: email => dispatch(deleteUser(email)),
  addAuthor: author => dispatch(addAuthor(author)),
  fetchAuthors: () => dispatch(fetchAuthors()),
  addAuthorRate: (id, rate) => dispatch(addAuthorRate(id, rate)),
  addReview: review => dispatch(addReview(review)),
  fetchReviews: () => dispatch(fetchReviews()),
  addReviewRate: (id, rate) => dispatch(addReviewRate(id, rate)),
  addBook: book => dispatch(addBook(book)),
  fetchBooks: () => dispatch(fetchBooks()),
  addBookRate: (id, rate) => dispatch(addBookRate(id, rate)),
  addAuthorComment: (id, comment) => dispatch(addAuthorComment(id, comment)),
  deleteAuthorComment: id => dispatch(deleteAuthorComment(id)),
  addBookComment: (id, comment) => dispatch(addBookComment(id, comment)),
  deleteBookComment: id => dispatch(deleteBookComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
