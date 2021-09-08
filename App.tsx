import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker'
import * as FileSystem from 'expo-file-system'
import { Button, Image } from 'react-native'

export default function App() {
  const [doc, setDoc] = useState()

  const handlePress = async () => {
    const doc = await DocumentPicker.getDocumentAsync()

    const info = await FileSystem.getInfoAsync(doc.uri)
    console.log(doc)
    console.log('---')
    console.log(info)
    setDoc(doc)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title='click' onPress={handlePress} />
      <Image
        source={{
          uri: doc && doc.uri
        }}
        style={{
          width: 50,
          height: 50
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
