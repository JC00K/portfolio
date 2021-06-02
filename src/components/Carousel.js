import React from 'react';
import sketchi from '../images/sketchi.png';
import earthmoon from '../images/earthmoon.png';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Sketchi',
          subTitle: 'Pictionary with a twist',
          imgSrc: sketchi,
          link: 'https://sketchi-draw.herokuapp.com/',
          selected: false,
        },
        {
          id: 1,
          title: 'Earth Moon Render',
          subTitle: 'Interactive render of the Earth and Moon',
          imgSrc: earthmoon,
          link: 'https://earth-moon-render.herokuapp.com/',
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(event) => this.handleCardClick(item.id, event)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
