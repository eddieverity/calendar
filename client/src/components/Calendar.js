import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';



class Calendar extends Component {
  onChange = (e) => {
    this.setState({  [e.target.name]: e.target.value })
  };

  render() {
  let week1 = [1,2,3,4,5,6,7]
  let week2 = [8,9,10,11,12,13,14]
  let week3 = [15,16,17,18,19,20,21]
  let week4 = [22,23,24,25,26,27,28]
  let week5 = [29,30,31]
  let today = new Date().getDate()

    const formattedCalendar1 = 
        week1.map(day => (
          <td key={day} className = "square1">
            {day}
            { day === today && ' Today'}
            { day >= today && 

              <div><Link to="/create-appointment" className="btn btn-sm btn-info">
                +
              </Link></div>
            }
          </td>
        ))
    const formattedCalendar2 = 
        week2.map(day => (
          <td key={day} className = "square1">
            {day}
            { day === today && ' Today'}
            { day >= today && 
              <div><Link to="/create-appointment" className="btn btn-sm btn-info">
                +
              </Link></div>
            }
          </td>
        ))
    const formattedCalendar3 = 
        week3.map(day => (
          <td key={day} className = "square1">
            {day}
            { day === today && ' Today'}
            { day >= today && 
             

              <div><Link to="/create-appointment" className="btn btn-sm btn-info">
                +
              </Link></div>
            }
          </td>
        ))
    const formattedCalendar4 = 
        week4.map(day => (
          <td key={day} className = "square1">
            {day}
            { day === today && ' Today'}
            { day >= today && 
              <div><Link to="/create-appointment" className="btn btn-sm btn-info">
                +
              </Link></div>
            }
          </td>
        ))

    const formattedCalendar5 = 
        week5.map(day => (
          <td key={day} className = "square1">
            {day}
            { day === today && ' Today'}
            { day >= today && 
              <div><Link to="/create-appointment" className="btn btn-sm btn-info">
                + 
              </Link></div>
              
            }
            // TODO: Loop through appointments & display
            // for each display, have 'edit' icon that routes to /appointment/edit/:id
            // for each display, have 'delete' icon that routes to /appointment/delete/:id
          </td>
        ))   

      return (
        <div>
          <h4 className="mb-4 col-7">Calendar</h4>
          <table className="table-bordered">
            <thead>
              <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              { formattedCalendar1 }
              </tr>
              <tr>
              { formattedCalendar2 }
              </tr>
              <tr>
              { formattedCalendar3 }
              </tr>
              <tr>
              { formattedCalendar4 }
              </tr>
              <tr>
              { formattedCalendar5 }
              </tr>
            </tbody>
          </table>
        </div>
      )

  }
}

Calendar.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Calendar);


