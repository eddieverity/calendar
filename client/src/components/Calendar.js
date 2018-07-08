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
  state = {

    month: [
      { id: uuid(), day:1, appointment:[]},
      { id: uuid(), day:2, appointment:[]},
      { id: uuid(), day:3, appointment:[]},
      { id: uuid(), day:4, appointment:[]},
      { id: uuid(), day:5, appointment:[]},
      { id: uuid(), day:6, appointment:[]},
      { id: uuid(), day:7, appointment:[]},
      { id: uuid(), day:8, appointment:[]},
      { id: uuid(), day:9, appointment:[]},
      { id: uuid(), day:10, appointment:[]},
      { id: uuid(), day:11, appointment:[]},
      { id: uuid(), day:12, appointment:[]},
      { id: uuid(), day:13, appointment:[]},
      { id: uuid(), day:14, appointment:[]},
      { id: uuid(), day:15, appointment:[]},
      { id: uuid(), day:16, appointment:[]},
      { id: uuid(), day:17, appointment:[]},
      { id: uuid(), day:18, appointment:[]},
      { id: uuid(), day:19, appointment:[]},
      { id: uuid(), day:20, appointment:[]},
      { id: uuid(), day:21, appointment:[]},
      { id: uuid(), day:22, appointment:[]},
      { id: uuid(), day:23, appointment:[]},
      { id: uuid(), day:24, appointment:[]},
      { id: uuid(), day:25, appointment:[]},
      { id: uuid(), day:26, appointment:[]},
      { id: uuid(), day:27, appointment:[]},
      { id: uuid(), day:28, appointment:[]},
      { id: uuid(), day:29, appointment:[]},
      { id: uuid(), day:30, appointment:[]},
      { id: uuid(), day:31, appointment:[]},
      { id: uuid(), day:1, appointment:[]}

    ]
  }


  render() {
    const { items } = this.state;
    var month = [
      {day:1,appointment:null},
      {day:2,appointment:null},
      {day:3,appointment:null},
      {day:4,appointment:null},
      {day:5,appointment:null},
      {day:6,appointment:null},
      {day:7,appointment:null},
      {day:8,appointment:null},
      {day:9,appointment:null},
      {day:10,appointment:null},
      {day:11,appointment:null},
      {day:12,appointment:null},
      {day:13,appointment:null},
      {day:14,appointment:null},
      {day:15,appointment:null},
      {day:16,appointment:null},
      {day:17,appointment:null},
      {day:18,appointment:null},
      {day:19,appointment:null},
      {day:20,appointment:null},
      {day:21,appointment:null},
      {day:22,appointment:null},
      {day:23,appointment:null},
      {day:24,appointment:null},
      {day:25,appointment:null},
      {day:26,appointment:null},
      {day:27,appointment:null},
      {day:28,appointment:null},
      {day:29,appointment:null},
      {day:30,appointment:null},
      {day:31,appointment:null}
    ]

    var buttons = month.map(function(day){
      return <div class="square">           <Button
            color="light"
            size="sm"

            style={{ marginBottom: '2rem' }}
            onClick={() => {
              const appt = prompt('Enter Appointment Description');
              if (appt) {
                this.setState(state => ({
                  items: [...state.items, { id: uuid(), appt }]
                }));
              }
            }}
          >
            {day.day} <span class="appointment">Add Appointment</span>
          </Button>


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