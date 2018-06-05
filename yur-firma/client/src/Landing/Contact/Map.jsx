import React, { Component } from 'react';
import styled from 'styled-components';

import GoogleMapReact from 'google-map-react';

const Location = styled.h3`
  color: #D10505;
`

const AnyReactComponent = ({ text }) => <Location>{text}</Location>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 56.262378,
      lng: 43.896545
    },
    zoom: 16
  };

  render() {
    return (
      <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBltLKf38da1h-LcdzXa34lyd62Vz_iR_k" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={56.262378}
            lng={43.896545}
            text={'Мы здесь'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}


export default Map;
