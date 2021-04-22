import React from 'react';
import Message from '../components/Message';
import Carousel from '../components/Carousel';

function HomePage(props) {
  return (
    <div>
      <Message
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
      />
      <Carousel />
    </div>
  );
}

export default HomePage;
