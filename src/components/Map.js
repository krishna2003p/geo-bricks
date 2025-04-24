import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const createLogoIcon = (logoUrl) => {
  return L.icon({
    iconUrl: logoUrl,
    iconSize: [40, 40], 
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};


export default function Map({ projects }) {
  
  return (
    <div style={{ height: '500px', width: '100%' }} className="rounded-xl shadow overflow-hidden">
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {projects.map((project, i) => (
          <Marker key={i} position={[project.latitude, project.longitude]} icon={createLogoIcon('/location.png')}>
            <Popup>
              <strong>{project.name}</strong><br />
              {project.price}<br />
              {project.builder}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}