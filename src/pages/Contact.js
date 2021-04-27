import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Message from '../components/Message';
import Content from '../components/Content';
const axios = require('axios').default;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onSubjectChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  onMsgChange = (event) => {
    this.setState({ message: event.target.value });
  };

  submitEmail = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: '/send',
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'success') {
        alert('Message Sent!');
        this.resetForm();
      } else if (response.data.status === 'fail') {
        alert('Message failed to send!');
      }
    });
  };

  resetForm() {
    this.setState({ name: '', email: '', subject: '', message: '' });
  }

  render() {
    return (
      <div>
        <Message title={this.props.title} />

        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor='full-name'>Full Name</Form.Label>
              <Form.Control
                id='full-name'
                name='name'
                type='text'
                value={this.state.name}
                onChange={this.onNameChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Control
                id='email'
                name='email'
                type='email'
                value={this.state.email}
                onChange={this.onEmailChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='subject'>Subject</Form.Label>
              <Form.Control
                id='subject'
                name='subject'
                type='text'
                value={this.state.subject}
                onChange={this.onSubjectChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='message'>Message</Form.Label>
              <Form.Control
                id='message'
                name='message'
                as='textarea'
                rows='3'
                value={this.state.message}
                onChange={this.onMsgChange}
              />
            </Form.Group>

            <Button className='d-inline-block' variant='primary' type='submit'>
              Send
            </Button>
          </Form>
        </Content>
      </div>
    );
  }
}

export default Contact;
