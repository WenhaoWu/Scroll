/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListView,
  Image
} from 'react-native';

export default class App extends Component<{}> {

  render() {

    var dataList = [];

    var step;
    for (step = 0; step < 1000; step++) {
      dataList.push({key: 'step '+step});
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={dataList}
          renderItem={({item}) => <Item/>}
        />
      </View>
    );
  }
}

class Item extends Component{
  
  render(){
    
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.item}>
        <Image source={pic} style={{width: 150, height: 110}}/>
        <View style={styles.itemText}>
          <Text>Banana</Text>
          <Text>Banana is better than apple!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },

  itemText : {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
  }
});
