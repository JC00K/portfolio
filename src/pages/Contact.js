import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    };
  }

  render() {
    return <p>Contact Works</p>;
  }
}

export default Contact;
