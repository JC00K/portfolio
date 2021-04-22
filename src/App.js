import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Jeremy Cook',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Resume', path: '/resume' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Placeholder for title',
        subTitle: 'Placeholder for subTitle',
        text: 'Placeholder for text',
      },
      about: {
        title: 'About Me',
      },
      resume: {
        title: 'Placeholder for resume (presentation pending)',
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
                <Link className='nav-link' to='/resume'>
                  Resume
                </Link>
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
            path='/resume'
            render={() => <Resume title={this.state.resume.title} />}
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
