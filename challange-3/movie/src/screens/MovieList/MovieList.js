import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function MovieList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MovieList</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.item}>Movie 1</Text>
        <Text style={styles.item}>Movie 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create();
