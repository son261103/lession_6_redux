import React, {Component} from 'react';
import {connect} from 'react-redux';

class WellcomeRedux extends Component {
    render() {
        return (
            <div className="text-center my-4 bg-body-secondary">
                <h3>Xin chào, <span>{this.props.name}</span></h3>
                <h3>Chào mừng bạn đến khóa học,<span>{this.props.courseName}</span></h3>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        name: state.name,
        courseName: state.courseName
    }
}

export default connect(mapStateToProps, null)(WellcomeRedux);