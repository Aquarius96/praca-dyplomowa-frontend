import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { simpleAction } from '../../redux/actions/simpleAction';

class Main extends Component {
  componentDidMount() {
    this.props.simpleAction();
  }

  render() {
    return (
      <div>
        <Typography variant="display1" align="center" gutterBottom>Praca dyplomowa frontend</Typography>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  result: state.userReducer.result,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});

Main.propTypes = {
  simpleAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
