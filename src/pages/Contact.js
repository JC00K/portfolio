import React from 'react';
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
