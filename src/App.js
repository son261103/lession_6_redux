import React from "react";
import { connect } from "react-redux";
import WellcomeRedux from "./components/WellcomeRedux";
import { actChangeActionCourseName, actChangeActionName } from "./actions";
import './App.css';

class App extends React.Component {
    handleChangeUserName = (event) => {
        this.props.changeUserName(event.target.value);
    };

    handleChangeCourseName = (event) => {
        this.props.changeCourseName(event.target.value);
    };

    render() {
        return (
            <div className="container">
                <header className="text-center my-4">
                    <h1>Welcome to Redux</h1>
                </header>

                <form className="form-sample">
                    <div className="form-group row">
                        <label htmlFor="name" className="form-label col-sm-2">Change Username</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                onChange={this.handleChangeUserName}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="courseName" className="form-label col-sm-2">Change Course Name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="courseName"
                                onChange={this.handleChangeCourseName}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <WellcomeRedux/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeUserName: (value) => {
            dispatch(actChangeActionName(value))
        },
        changeCourseName: (value) => {
            dispatch(actChangeActionCourseName(value))
        }
    }
}

export default connect(null, mapDispatchToProps)(App);
