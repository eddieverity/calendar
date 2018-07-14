import React, { Component } from 'react';

import dateFns from "date-fns";
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




  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = (e) => {
    this.setState({  [e.target.name]: e.target.value })
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: this.state.name
    }

    // Add item via addItem action
    this.props.addItem(newItem);

    // Close Modal
    this.toggle();
  }

// Set up state for hardcoded test variables until user login with class-month schema enabled
  state = {
    currentDay: new Date(),
    modal: false,
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
    console.log(dateFns.format(this.state.currentDay, "D"))
    // iterates over month object to display days/add button/pending appointments
    var buttons = month.map(function(day){
      return <div class="square">           
        {day.day}



      {/* logic for only display 'add appointment' button if date > current day*/ }
        {/* {{day.day} >= dateFns.format(this.state.currentDay, "D") && */ }
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
        
      


        <div class="appointmentDisplay">
          { day.appointment[0].title }
          {" "}
          {day.appointment[0].description}
          {" "}
          {day.appointment[0].time}
        </div>
{/*

      <div>
        <Button
          color="dark"
          onClick={this.toggle}
        >Add Appointment
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Add To Appointments</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="item">Item</Label>
                  <Input 
                    type="text"
                    name="name"
                    id="item"
                    placeholder="Add shopping item"
                    onChange={this.onChange}
                  />
                  <Button
                    color="dark"
                    style={{marginTop: '2rem'}}
                    block
                  >Add Appointment</Button>
                </FormGroup>
              </Form>
            </ModalBody>
        </Modal>
      </div>


*/}   
      </div>;
    })
    const dateFormat = "MMMM YYYY";
    return <div class="grid"><div class="month"><b>{dateFns.format(this.state.currentDay, dateFormat)}</b></div>
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