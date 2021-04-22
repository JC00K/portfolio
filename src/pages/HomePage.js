import React from 'react';
import Message from '../components/Message';

function HomePage(props) {
  return (
    <Message title={props.title} subTitle={props.subTitle} text={props.text} />
  );
}

export default HomePage;
