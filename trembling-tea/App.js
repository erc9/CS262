import * as React from 'react';
import { FlatList, ScrollView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      text: 'hello'
    }
  }

  updatedText=(newText)=>{
    this.setState({text: newText})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
            {this.state.text}
        </Text>
        <Card>
          <AssetExample permission={this.updatedText} />
        </Card>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})