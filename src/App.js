import './App.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Navbar, Container, NavDropdown, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar variant='light' expand="lg">
        <Container>
          <Navbar.Brand><Link to="/"><i className='bi bi-house-door px-2'></i></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="HYDROLOGICAL" id="hydrological-nav-dropdown" className='px-2'>
                <NavDropdown.Item>Rainfall</NavDropdown.Item>
                <NavDropdown.Item>Temperature</NavDropdown.Item>
                <NavDropdown.Item>Humidity</NavDropdown.Item>
                <NavDropdown.Item>Evaporation</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="LISFLOOD" id="hydrological-nav-dropdown" className='px-2'>
                <NavDropdown.Item>Discharge Value</NavDropdown.Item>
                <NavDropdown.Item>Flood Marking</NavDropdown.Item>
              </NavDropdown>
              <NavItem><input type='date' style={{ padding: "8px 5px", border: "none", color: 'rgba(0,0,0,.55)', textTransform: 'uppercase' }}></input></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}


export default App;
