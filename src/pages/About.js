import React from 'react';
import Message from '../components/Message';
import Content from '../components/Content';

function About(props) {
  return (
    <div>
      <Message title={props.title} />

      <Content>
        <p>
          Hello, my name is Jeremy. I'm a fullstack engineer who recently
          finished a coding bootcamp at Fullstack Academy. I have experience
          with React, Redux, Express, NodeJS, PostgreSQL and ThreeJS.
        </p>

        <p>
          Since graduating, I've continued to learn about new technologies, and
          have begun working on some projects (which will be shown on the home
          page as they are completed). My dream is to work in the digital media
          streaming industry as an engineer!
        </p>

        <p>
          When I am not working on something new, chances are I'm either gaming
          with some friends, playing/watching sports, or watching something Star
          Wars related.
        </p>
      </Content>
    </div>
  );
}

export default About;
