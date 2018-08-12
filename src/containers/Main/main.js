import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../redux/actions/simpleAction';

class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.simpleAction();
    }
    render() {
        return (
            <div>
                Praca dyplomowa frontend
                {this.props.result}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        result: state.userReducer.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        simpleAction: () => dispatch(simpleAction())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Main);