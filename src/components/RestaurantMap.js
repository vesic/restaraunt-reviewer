import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};


class RestaurantMap extends React.Component {
  constructor(props) {
    super(props)
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  render () {
    return (
      <Gmaps
        width={'500px'}
        height={'300px'}
        lat={this.props.coords[0]}
        lng={this.props.coords[1]}
        zoom={18}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyCZ3n1EQVMXw-V_8VAtHFN1RsBkfik7MyI'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }
}

export default RestaurantMap;

// const RestaurantMap = React.createClass({
//
//   onMapCreated(map) {
//     map.setOptions({
//       disableDefaultUI: true
//     });
//   },
//
//   onDragEnd(e) {
//     console.log('onDragEnd', e);
//   },
//
//   onCloseClick() {
//     console.log('onCloseClick');
//   },
//
//   onClick(e) {
//     console.log('onClick', e);
//   },
//
//   render() {
//     return (
//       <Gmaps
//         width={'400px'}
//         height={'300px'}
//         lat={coords.lat}
//         lng={coords.lng}
//         zoom={12}
//         loadingMessage={'Be happy'}
//         params={{v: '3.exp', key: 'AIzaSyCZ3n1EQVMXw-V_8VAtHFN1RsBkfik7MyI'}}
//         onMapCreated={this.onMapCreated}>
//         <Marker
//           lat={coords.lat}
//           lng={coords.lng}
//           draggable={true}
//           onDragEnd={this.onDragEnd} />
//         <InfoWindow
//           lat={coords.lat}
//           lng={coords.lng}
//           content={'Hello, React :)'}
//           onCloseClick={this.onCloseClick} />
//         <Circle
//           lat={coords.lat}
//           lng={coords.lng}
//           radius={500}
//           onClick={this.onClick} />
//       </Gmaps>
//     );
//   }
//
// });
//
// export default RestaurantMap;