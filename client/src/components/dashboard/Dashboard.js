import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';

import Calendar from '../Calendar';



class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { loading } = this.props.profile;

    let dashboardContent;

    if(loading) {
      dashboardContent = <Spinner />
    } else {
      // Check if logged in user has profile data
       
        // display profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome { user.name }</p>
  
            <Calendar />

          
          <div style={{ marginBottom: '60px' }} />
          <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete My Account</button>

          
          </div>
        )
       
        
        
      
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});


export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);


