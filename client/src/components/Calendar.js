import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class Calendar extends Component {
  state = {
    items: [
      { id: uuid(), name: 'todo' },

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
        <ListGroup>
          <TransitionGroup className="shopping-list">
            if(month.appointment != null){
              <CSSTransition key={day} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                  >
                    {month.appointment}
                  </Button>
                </ListGroupItem>
              </CSSTransition>
            }
          </TransitionGroup>
        </ListGroup>
*/}

   
      </div>;
    



    })
    return <div class="grid">{ buttons }</div>

  }
}

export default Calendar;