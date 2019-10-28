import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
state = {
      contacts: [
    {
      id: 1,
      number: '01bbb998-af3d-47a4-b0ff-e67d033d80e9',
      name: 'Luz Ballard'
    },
    {
      id: 2,
      number: '01021494-f157-4183-964c-6b0ddc964ab8',
      name: 'Corey Johnson'
    },
    {
      id: 3,
      number: '97a2daa4-406b-4b1c-831e-bdfd90b224f2',
      name: 'Andrew Torres'
    },
    {
       id: 4,
      number: '6256ba85-b59f-40b9-8715-406cc54d7f05',
       name: 'Nichole Wilson'
    },
     {
       id: 5,
      number: '5c0c746c-ec56-4fb7-8b32-066b64d70611',
       name: 'Nancy Hall'
    },
      {
       id: 6,
      number: 'c103b480-8efb-450f-9141-6a8037de2348',
       name: 'Agnes Lorenzen'
    },
     {
       id: 7,
      number: '4e0cc3dc-fce9-45d9-85c7-a3ae5cb0ce57',
       name: 'Donald Hyde'
    },
     {
       id: 8,
      number: 'f80af139-5c68-4475-8cb6-ced7e38c6f43',
       name: 'Dennis Fuller'
    },
     {
       id: 9,
      number: '5073359e-b228-4852-b1a3-3f2edfc8672f',
       name: 'Francis Hodgkins'
    },
     {
       id: 10,
      number: '9c9a3cc8-044e-43d0-87ff-58a6b44eca53',
       name: 'David McLain'
    },
    ]
    }
  

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id}
            contact={contact}
          />
        ))}
      </div>
    )
  }
}
export default Contacts; 