import React from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

class Description extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  helpDiv;

  createButtonControl() {
    const MapHelp = L.Control.extend({
      onAdd: (map) => {
        const helpDiv = L.DomUtil.create("button", "");
        this.helpDiv = helpDiv;
        helpDiv.innerHTML = this.props.title;

        helpDiv.addEventListener("click", () => {
          console.log(this.props.position);
          map.flyTo(this.props.position, this.props.zoom)
        });
        return helpDiv;
      }
    });
    return new MapHelp({ position: "bottomright" });
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

export default withMap(Description);
