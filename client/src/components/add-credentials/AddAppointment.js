import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAppointment } from '../../actions/profileActions';


class AddAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      from: '',
      to: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    
    const apptData = {
      title: this.state.title,
      description: this.state.description,
      from: this.state.from,
      to: this.state.to
    };

    this.props.addAppointment(apptData, this.props.history);

  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }



  render() {
    const { errors } = this.state;

    return (
      <div className="add-appointment">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Appointment</h1>
              
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="* Title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                error={errors.title}
               />
              
              <h6>From</h6>
              <TextFieldGroup
                name="from"
                type="date"
                value={this.state.from}
                onChange={this.onChange}
                error={errors.from}
              />
              <h6>To</h6>
              <TextFieldGroup
                name="to"
                type="date"
                value={this.state.to}
                onChange={this.onChange}
                error={errors.to}
                disabled={this.state.disabled ? 'disabled' : ''}
              />

             
              
              <TextAreaFieldGroup
                placeholder="Description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                error={errors.description}
              />
              <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

AddAppointment.propTypes = {
  addAppointment: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addAppointment })(withRouter(AddAppointment));

