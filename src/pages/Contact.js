import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Message from '../components/Message';
import Content from '../components/Content';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onMsgChange = (event) => {
    this.setState({ message: event.target.value });
  };

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  render() {
    return (
      <div>
        <Message title={this.props.title} />

        <Content>
          <form
            method='post'
            action='https://www.flexyform.com/f/ea45921afa5a1aa5d3a36f6fdfb6adb4c18095de'
          >
            <p>
              <label htmlFor='full-name'>Full Name</label>
              <input type='text' name='name' />
            </p>
            <p>
              <label htmlFor='email'>Email</label>
              <input type='email' name='_reply_to' />
            </p>
            <p>
              <label htmlFor='message'>Message</label>
              <input type='text' name='message' />
            </p>
            <button type='submit'>Send</button>
          </form>
        </Content>
      </div>
    );
  }
}

export default Contact;

// <Form onSubmit={this.handleSubmit}>
//   <Form.Group>
//     <Form.Label htmlFor='full-name'>Full Name</Form.Label>
//     <Form.Control
//       id='full-name'
//       name='name'
//       type='text'
//       value={this.state.name}
//       onChange={this.onNameChange}
//     />
//   </Form.Group>

//   <Form.Group>
//     <Form.Label htmlFor='email'>Email</Form.Label>
//     <Form.Control
//       id='email'
//       name='_reply_to'
//       type='email'
//       value={this.state.email}
//       onChange={this.onEmailChange}
//     />
//   </Form.Group>

//   <Form.Group>
//     <Form.Label htmlFor='message'>Message</Form.Label>
//     <Form.Control
//       id='message'
//       name='message'
//       as='textarea'
//       rows='3'
//       value={this.state.message}
//       onChange={this.onMsgChange}
//     />
//   </Form.Group>

//   <Button className='d-inline-block' variant='primary' type='submit'>
//     Send
//   </Button>
// </Form>
