import React from 'react';
import {ListView, StyleSheet, Text, View} from 'react-native';

import data from '../data/filterList.json';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class AppCtrl extends React.Component {
  state = {dataSource: ''};
  componentWillMount = () => { this.loadData(); };
  loadData = () => { this.setState({dataSource: ds.cloneWithRows(data)}); };
  renderRow = (record) => {
    return (
      <View style={styles.row}>
        <View style={styles.line1}>
          <Text style={styles.key}>{record.key}</Text>
        </View>
        {record.options.map((option, index) => {
          if (index === 0) return null;
          else return (
            <View key={option.label + index} style={styles.line2}>
              <Text style={styles.label}>{option.label}</Text>
              <View style={styles.line2b}>
                <Text style={styles.value}>{option.value}</Text>
                <Text style={styles.count}>{option.count}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Sales</Text>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    backgroundColor: '#0f1b29',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  line1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  key: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  line2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  label: {
    flex: 2,
    fontSize: 14,
    fontWeight: 'bold',
  },
  line2b: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 14,
  },
  count: {
    color: '#1cad61',
    fontFamily: 'Courier',
    fontSize: 16,
    textAlign: 'left',
    width: 20,
  },
});
