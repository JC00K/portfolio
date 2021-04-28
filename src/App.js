import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Jeremy Cook',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: "Hard Work Never Doesn't Pay Off!",
        subTitle: 'Keep On Pushing!',
        text: 'Check out my projects below!',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: "Let's Talk!",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Jeremy Cook</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
                <a
                  className='nav-link'
                  href='https://drive.google.com/file/d/1azlO0noXVV78STI0wx1NZt3COC5utBCb/view?usp=sharing'
                  target='_blank'
                  rel='noreferrer'
                >
                  Resume
                </a>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path='/'
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path='/about'
            render={() => <About title={this.state.about.title} />}
          />
          <Route
            path='/contact'
            render={() => <Contact title={this.state.contact.title} />}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
