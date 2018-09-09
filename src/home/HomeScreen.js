import React from 'react'

import {
  Text, TextInput, TouchableOpacity,
  View, StyleSheet
} from 'react-native'

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      x: 10,
      y: 5000,
      long: 103.81983600000001,
      lat: 1.352083
    }

  }

  submit = () => {

    const {navigation} = this.props

    const {x, y, long, lat} = this.state
    let query = `long=${long}&lat=${lat}&x=${x}&y=${y}`
    fetch('http://localhost:3030/scooters?' + query, {
      method: 'GET'
    }).then((response) => {
      response.json().then(json => {
        console.log('JSON ' + JSON.stringify(json))
        navigation.navigate('Map', {
          currentLong: long,
          currentLat: lat,
          data: json
        })
      })

    }).catch(error => {
      console.log('error' + error)
    })

  }

  render () {
    return (<View style={styles.container}>
      <Text>
        Home Screen
      </Text>
      <TextInput onChangeText={(long) => this.setState({long})} value={this.state.long.toString()} placeholder={'Long'}
                 style={styles.input}/>
      <TextInput onChangeText={(lat) => this.setState({lat})} value={this.state.lat.toString()} placeholder={'lat'}
                 style={styles.input}/>
      <TextInput onChangeText={(x) => this.setState({x})} value={this.state.x.toString()} placeholder={'x (number of scooters)'}
                 style={styles.input}/>
      <TextInput onChangeText={(y) => this.setState({y})} value={this.state.y.toString()} placeholder={'y (radius in km)'}
                 style={styles.input}/>
      <TouchableOpacity style={styles.btnContainer} onPress={this.submit}>
        <Text>Fetch Map</Text>
      </TouchableOpacity>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  input: {
    marginTop: 5,
    paddingHorizontal: 5,
    height: 50,
    width: 250,
    borderWidth: 0.5,
    borderRadius: 5
  },
  btnContainer: {
    backgroundColor: 'blue',
    height: 50,
    width: 200,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }

})