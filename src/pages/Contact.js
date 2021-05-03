import React from 'react';
import Message from '../components/Message';
import Content from '../components/Content';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

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
              <FormLabel htmlFor='full-name'>Name</FormLabel>
              <TextField type='text' name='name' required />
            </p>
            <p>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <TextField type='email' name='_reply_to' required />
            </p>
            <p>
              <FormLabel htmlFor='message'>Message</FormLabel>
              <TextField
                variant='outlined'
                type='text'
                name='message'
                multiline
                rows={3}
                fullWidth
                required
              />
            </p>
            <Button type='submit' variant='contained' color='primary'>
              Send
            </Button>
          </form>
        </Content>
      </div>
    );
  }
}

export default Contact;
