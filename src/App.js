import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Clock from './components/Clock';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { NavItem } from 'react-bootstrap';

let data = [
  {
    'id':'1',
    'name':'sabbir Ahmed',
    'phone':'01722373161'
  }
]

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      }
      <Card>
        <CardHeader>
          Hello
        </CardHeader>
        <Nav>
          <NavItem className=''>Heloo</NavItem>
          <NavItem>Heloo</NavItem>
          <NavItem>Heloo</NavItem>
        </Nav>
      </Card>
      <div>
        <Table data={data}/>
        <hr/>
        <Clock/>
      </div>
    </div>
  );
}

export default App;
