import React, { Component } from 'react';


import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import { CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class Calendar extends Component {

// Set up state for hardcoded test variables until user login with class-month schema enabled
  state = {
    month: [
      { id: uuid(), day:1, appointment:[{title:"zxcv", description:"", time:""}]},
      { id: uuid(), day:2, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:3, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:4, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:5, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:6, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:7, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:8, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:9, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:10, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:11, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:12, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:13, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:14, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:15, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:16, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:17, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:18, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:19, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:20, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:21, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:22, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:23, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:24, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:25, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:26, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:27, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:28, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:29, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:30, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:31, appointment:[{title:"second", description:"baseball", time:"2-4"}]},
      { id: uuid(), day:1, appointment:[{title:"second", description:"baseball", time:"2-4"}]}
    ]
  }

  render() {
    // sets month to this.state for page manipulation later when appts added/deleted
    const { month } = this.state;
    console.log(month)
    // iterates over month object to display days/add button/pending appointments
    var buttons = month.map(function(day){
      return <div class="square">           
        {day.day}
        <Button
          color="light"
          size="sm"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const appt = prompt('Enter Appointment Description');
            if (appt) {
              this.setState(state => ({
                appt: [...state.day.appointment, { id: uuid(), appt }]
              }));
            }
          }}
        >
        <span class="appointment">Add Appointment</span>
        </Button>   
        <div class="appointmentDisplay">{ day.appointment[0].title }{" "}{day.appointment[0].description}{" "}{day.appointment[0].time}</div>
{/*

*/}   
      </div>;
    })

    return <div class="grid"><div class="month"><b>January 2018</b></div>
      <div class="grid">
        <div class="title">Sunday</div>
        <div class="title">Monday</div>
        <div class="title">Tuesday</div>
        <div class="title">Wednesday</div>
        <div class="title">Thursday</div>
        <div class="title">Friday</div>
        <div class="title">Saturday</div>
      </div>
      { buttons }</div>

  }
}

export default Calendar;