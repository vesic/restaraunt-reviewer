import React from 'react';
import {Gmaps} from 'react-gmaps';

class RestaurantMap extends React.Component {
  constructor(props) {
    super(props)
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
      mapTypeId: 'satellite'
    });
  }

  render () {
    return (
      <Gmaps
        width={'100%'}
        height={'300px'}
        lat={this.props.coords[0]}
        lng={this.props.coords[1]}
        zoom={18}
        loadingMessage={'Loading...'}
        params={{v: '3.exp', key: 'AIzaSyCZ3n1EQVMXw-V_8VAtHFN1RsBkfik7MyI'}}
        onMapCreated={this.onMapCreated}>
      </Gmaps>
    );
  }
}

export default RestaurantMap;
