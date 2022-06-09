import './App.css'
import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet'
import Navbar from './Navbar'

const Map = () => {
  const isOnline = navigator.onLine;
  if (isOnline) {
    const position = [28.5457, 77.1928];
    return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="w-screen h-screen bg-indigo-300" zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position='bottomright' />
        <Marker position={position} eventHandlers={{
          click: () => {
            console.log("IIT Delhi")
          },
        }}>
          <Popup>
            IIT Delhi
          </Popup>
        </Marker>
      </MapContainer>
    )
  } else {
    return (
      <div className='w-screen h-screen flex justify-center items-center text-5xl antialiased font-bold text-indigo-500'>
        It seems you are offline!
      </div>
    )
  }
}

function App() {
  return (
    <>
      <Navbar />
      <Map />
    </>
  );
}


export default App;
