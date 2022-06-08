import './App.css'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import Navbar from './Navbar'


function App() {
  return (
    <>
      <Navbar />
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className="w-screen h-screen" zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position='bottomright' />
      </MapContainer>
    </>
  );
}


export default App;
