import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { register } from '../../redux/actions/user';

const user = {
  firstname: 'user',
  lastname: 'z frontu',
  password: 'tajne',
  emailAddress: 'fajny',
  username: 'fajniejszy'
}

class Main extends Component {
  
  static propTypes = {
    message: PropTypes.string,
    error: PropTypes.string,
    register: PropTypes.func.isRequired
  };

  componentDidMount() {
    
  }

  register = (user) => {
    this.props.register(user);
  }

  render() {
    return (
      <div>
        <Typography variant="display1" align="center" gutterBottom>Praca dyplomowa frontend</Typography>
        <button onClick={() => this.register(user)}>Zarejestruj użytkownika</button>        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.userReducer.message,
  error: state.userReducer.error,
});

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(register(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
