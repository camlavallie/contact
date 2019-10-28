import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Contact extends Component{
  state = {
    showId: false
  };
  render() {
    const { name, number } = this.props.contact;
    const { showId } = this.state;
  return (
    <div className="container">
    <div className="card card-body mb-3">
      <div className="list-group">
        <label htmlFor="checkbox">
          <input 
            className = "regular-checkbox big-checkbox"
            id = "checkbox"
            onClick={() => this.setState({ showId: !this.state.showId })}
            type="checkbox"
          />
          <span className="checkmark">{name}</span></label>
         {showId ? (<pre className="list-group-item">{number}</pre>) : null}

      </div>
    </div>
  </div>
  )
 }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}
export default Contact;