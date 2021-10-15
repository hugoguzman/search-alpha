import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

class LocateButton extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { position: null };
  // }
  helpDiv;

  createButtonControl() {
    const MapHelp = L.Control.extend({
      onAdd: (map) => {
        const helpDiv = L.DomUtil.create('button', '');
        this.helpDiv = helpDiv;
        helpDiv.innerHTML = this.props.title;

        helpDiv.addEventListener('click', () => {
          map
            .locate({ setView: true, maxZoom: 12 })
            .on('locationfound', function (e) {
              const myIcon = L.icon({
                iconSize: [15, 28],
                iconAnchor: [10, 41],
                popupAnchor: [2, -40],
                iconUrl:
                  'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
                shadowUrl:
                  'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
                
              });
              const marker = L.marker(e.latlng, {
                icon: myIcon
              });
              marker.bindPopup('You are here');
              marker.on('mouseover', function (e) {
                this.openPopup();
              });
              marker.on('mouseout', function (e) {
                this.closePopup();
              });
              marker.addTo(map);
            });
        });
        return helpDiv;
      },
    });
    return new MapHelp({ position: 'topright' });
  }

  componentDidMount() {
    const { map } = this.props;
    const control = this.createButtonControl();
    control.addTo(map);
  }

  componentWillUnmount() {
    this.helpDiv.remove();
  }

  render() {
    return null;
  }
}

function withMap(Component) {
  return function WrappedComponent(props) {
    const map = useMap();
    return <Component {...props} map={map} />;
  };
}

export default withMap(LocateButton);
