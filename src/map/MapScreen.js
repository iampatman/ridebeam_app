import React from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import MapView, { Marker } from 'react-native-maps'

export default class MapScreen extends React.Component {

  constructor (props) {
    super(props)
    const {params} = this.props.navigation.state
    this.state = {
      data: [...params.data],
      currentLocationMarker: {
        longitude: params.currentLong,
        latitude: params.currentLat
      }
    }

  }

  render () {
    const {currentLocationMarker} = this.state
    const scooterImg = require("../scooter.png");
    const markerImg = require("../download.png");

    return (
      <View style={styles.container}>
        {/*<Text>{JSON.stringify(this.state)}</Text>*/}
        <MapView
          style={{backgroundColor: 'black', height: '100%', width: '100%'}}
          initialRegion={{
            latitude: 1.352083,
            longitude: 103.81983600000001,
            latitudeDelta: 0.2922,
            longitudeDelta: 0.2421,
          }}
          zoomControlEnabled={true}
          zoomEnabled={true}
        >
          <Marker
            key={currentLocationMarker.longitude}
            coordinate={currentLocationMarker}
            title={'Init Location'}
            // image={markerImg}
          />
          {this.state.data.map(scooter => {
            let marker = {
              latlng: {
                longitude: parseFloat(scooter.long),
                latitude: parseFloat(scooter.lat)
              },
              title: 'Scooter',
              description: 'Battery: ' + scooter.battery
            }
            return (
              <Marker
                key={scooter.long}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                // image={scooterImg}
              />
            )
          })}

        </MapView>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    alignItems: 'center'
  },
})